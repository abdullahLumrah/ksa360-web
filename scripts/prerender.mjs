import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '../src/config.js'
import { posts } from '../src/content/posts.js'
import { featuredFallback } from '../src/content/featuredCoupons.js'
import { DEFAULT_IMAGE, seoFor, sitemapPaths } from '../src/seo.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function extraJsonLd(path, seo) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  if (path.startsWith('/blog/')) {
    const slug = path.replace(/^\/blog\//, '')
    const post = posts.find((row) => row.slug === slug)
    if (!post) return ''
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: seo.description,
      datePublished: '2026-11-18',
      dateModified: '2026-11-18',
      author: { '@type': 'Organization', name: 'Lumrah' },
      publisher: {
        '@type': 'Organization',
        name: 'Lumrah Solutions Private Limited',
        url: 'https://www.lumrah.co',
      },
      mainEntityOfPage: url,
      image: DEFAULT_IMAGE,
    }
    return `\n    <script type="application/ld+json">${JSON.stringify(ld)}</script>`
  }
  if (path === '/coupons' || path === '/offers' || path === '/daily-in-ksa') {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: seo.title,
      itemListElement: featuredFallback.flatMap((shop, i) =>
        shop.coupons.map((row, j) => ({
          '@type': 'ListItem',
          position: i * 10 + j + 1,
          name: `${shop.name} ${row.code}`,
          description: row.title,
        })),
      ),
    }
    return `\n    <script type="application/ld+json">${JSON.stringify(ld)}</script>`
  }
  return ''
}

function noscriptExtra(path) {
  if (path !== '/coupons' && path !== '/offers' && path !== '/daily-in-ksa') return ''
  const lines = featuredFallback
    .map((shop) => {
      const codes = shop.coupons.map((row) => `${row.code} (${row.title})`).join(', ')
      return `<li>${escapeHtml(shop.name)}: ${escapeHtml(codes)}</li>`
    })
    .join('')
  return `<ul>${lines}</ul>`
}

function inject(path) {
  const seo = seoFor(path)
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
    )

  const ld = extraJsonLd(path, seo)
  if (ld) html = html.replace('</head>', `${ld}\n  </head>`)

  const extra = noscriptExtra(path)
  if (extra) {
    html = html.replace(
      '</noscript>',
      `${extra}<p><a href="${PLAY_STORE_URL}">Google Play</a> · <a href="${APP_STORE_URL}">App Store</a></p></noscript>`,
    )
  }
  return html
}

for (const path of sitemapPaths) {
  const html = inject(path)
  if (path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }
  const dir = join(dist, path.replace(/^\//, ''))
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
}

writeFileSync(join(dist, '404.html'), inject('/'))

const today = new Date().toISOString().slice(0, 10)
const body = sitemapPaths
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
)

console.log(`prerendered ${sitemapPaths.length} routes`)

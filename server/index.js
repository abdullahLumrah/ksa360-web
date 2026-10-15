import compression from 'compression'
import express from 'express'
import { readFileSync, existsSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL } from '../src/config.js'
import { DEFAULT_IMAGE, seoFor, sitemapPaths } from '../src/seo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '../dist')
const port = Number(process.env.PORT) || 3000

if (!existsSync(join(dist, 'index.html'))) {
  console.error('Missing dist/. Run npm run build first.')
  process.exit(1)
}

const template = readFileSync(join(dist, 'index.html'), 'utf8')

function inject(html, path) {
  const seo = seoFor(path)
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeHtml(seo.title)}" />`)
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${DEFAULT_IMAGE}" />`)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

const app = express()
app.disable('x-powered-by')
app.use(compression())

app.get('/sitemap.xml', (_req, res) => {
  const today = new Date().toISOString().slice(0, 10)
  const urls = sitemapPaths
    .map(
      (path) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`,
    )
    .join('\n')
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`)
})

app.get('/healthz', (_req, res) => res.json({ ok: true, site: SITE_URL }))

app.use(
  express.static(dist, {
    index: false,
    maxAge: '7d',
    setHeaders(res, filePath) {
      if (filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache')
    },
  }),
)

app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next()
  if (extname(req.path)) return res.status(404).end()
  res.setHeader('Cache-Control', 'no-cache')
  res.type('html').send(inject(template, req.path || '/'))
})

app.listen(port, () => {
  console.log(`KSA 360 site → http://localhost:${port}`)
})

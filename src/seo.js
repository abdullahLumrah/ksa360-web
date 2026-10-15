import { SITE_NAME, SITE_URL } from './config.js'

export const DEFAULT_IMAGE = `${SITE_URL}/og.jpg`

export const routesSeo = {
  '/': {
    title: 'KSA 360 — Expat app for Saudi Arabia | Coupons, Marketplace, Prayer',
    description:
      'KSA 360 is the all-in-one companion for expats in Saudi Arabia: Daily in KSA coupons, marketplace, community, jobs, food, play, and Umm Al-Qura prayer times. Download the app.',
  },
  '/ksa': {
    title: 'KSA app for expats — KSA 360',
    description:
      'The KSA app expats actually use. Coupons, classifieds, community pages, jobs, and prayer times for Riyadh, Jeddah, Dammam, and more.',
  },
  '/ksa360': {
    title: 'KSA360 download — marketplace, coupons, community',
    description:
      'KSA360 (KSA 360) by Lumrah. Download on Google Play. iPhone is in App Store review. One app for daily life in the Kingdom.',
  },
  '/ksa-360': {
    title: 'KSA-360.com — official KSA 360 website',
    description:
      'Official site for KSA 360. Get Play Store and App Store links, coupons preview, and guides for living in Saudi Arabia.',
  },
  '/expat': {
    title: 'Expat life in Saudi Arabia app | KSA 360',
    description:
      'Moved to KSA? KSA 360 replaces scattered WhatsApp groups with marketplace, community, jobs, food, and prayer times.',
  },
  '/saudi': {
    title: 'Saudi Arabia living guide app | KSA 360',
    description:
      'KSA 360 covers daily living in Saudi Arabia: souq listings, coupons, clinics, schools, play, and prayer.',
  },
  '/saudi-arabia': {
    title: 'Saudi Arabia expat app — KSA 360',
    description:
      'Download KSA 360 for coupons, marketplace, community, and prayer times across Saudi cities.',
  },
  '/coupons': {
    title: 'KSA coupons & Daily in KSA brands | KSA 360',
    description:
      'Want a coupon in Saudi Arabia? Daily in KSA inside KSA 360 lists shops, brands, and offers. Download the app to redeem.',
  },
  '/offers': {
    title: 'Daily offers in Saudi Arabia | KSA 360',
    description: 'Brand offers and shop coupons for expats in KSA. Unlock them in the KSA 360 app.',
  },
  '/daily-in-ksa': {
    title: 'Daily in KSA — coupons and brands',
    description: 'Daily in KSA is the coupon and brand directory inside KSA 360. Perfume, groceries, car wash, fashion, and more.',
  },
  '/download': {
    title: 'Download KSA 360 for Android and iPhone',
    description: 'Get KSA 360 on Google Play. App Store listing is in review. Official download page for ksa-360.com.',
  },
  '/app': {
    title: 'Get the KSA 360 app',
    description: 'Play Store and App Store links for KSA 360, the expat companion for Saudi Arabia.',
  },
  '/marketplace': {
    title: 'KSA marketplace & classifieds app | KSA 360',
    description: 'Buy and sell nearby in Saudi Arabia — cars, furniture, phones, real estate. Chat in-app after you sign in.',
  },
  '/community': {
    title: 'Expat community in Saudi Arabia | KSA 360',
    description: 'Follow community pages, post, comment, and report content. Housing, visas, schools, weekends.',
  },
  '/prayer': {
    title: 'Prayer times Saudi Arabia — Umm Al-Qura | KSA 360',
    description: 'Umm Al-Qura prayer times for your city in KSA 360, plus English and Arabic in one app.',
  },
  '/jobs': {
    title: 'Jobs in Saudi Arabia for expats | KSA 360',
    description: 'Scan jobs across Saudi cities inside KSA 360, next to marketplace, clinics, and community.',
  },
  '/blog': {
    title: 'KSA 360 blog — expat guides for Saudi Arabia',
    description: 'Guides on living in KSA: marketplace safety, coupons, prayer times, and community. From the makers of KSA 360.',
  },
  '/guides': {
    title: 'Expat guides for Saudi Arabia | KSA 360',
    description: 'Practical KSA guides: classifieds, Daily in KSA coupons, and daily prayer times.',
  },
}

export const blogSeo = {
  'expat-guide-saudi-arabia': {
    title: 'Expat guide to daily life in Saudi Arabia | KSA 360',
    description:
      'How expats actually handle housing chats, souq deals, food, and prayer times in KSA — and how KSA 360 puts them in one app.',
  },
  'ksa-coupons-daily-in-ksa': {
    title: 'Where to find coupons in KSA | Daily in KSA',
    description:
      'Daily in KSA inside KSA 360 lists perfume, grocery, car wash, and fashion offers. Download the app to open a coupon.',
  },
  'marketplace-saudi-classifieds': {
    title: 'Buy and sell in Saudi Arabia without the WhatsApp chaos',
    description:
      'A calmer classifieds flow for cars, furniture, and phones in KSA, with in-app chat after you sign in.',
  },
}

export function seoFor(path) {
  const clean = path.replace(/\/$/, '') || '/'
  if (clean.startsWith('/blog/') && clean.length > 6) {
    const slug = clean.slice(6)
    const row = blogSeo[slug]
    if (row) return row
  }
  return (
    routesSeo[clean] || {
      title: `${SITE_NAME} · ${SITE_URL.replace('https://', '')}`,
      description: routesSeo['/'].description,
    }
  )
}

export const sitemapPaths = [
  '/',
  '/ksa',
  '/ksa360',
  '/ksa-360',
  '/expat',
  '/saudi',
  '/saudi-arabia',
  '/coupons',
  '/offers',
  '/daily-in-ksa',
  '/download',
  '/app',
  '/marketplace',
  '/community',
  '/prayer',
  '/jobs',
  '/blog',
  '/guides',
  '/blog/expat-guide-saudi-arabia',
  '/blog/ksa-coupons-daily-in-ksa',
  '/blog/marketplace-saudi-classifieds',
]

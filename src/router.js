import { createRouter, createWebHistory } from 'vue-router'
import { SITE_URL } from './config.js'
import { seoFor } from './seo.js'

const HomePage = () => import('./pages/HomePage.vue')
const CouponsPage = () => import('./pages/CouponsPage.vue')
const DownloadPage = () => import('./pages/DownloadPage.vue')
const BlogIndex = () => import('./pages/BlogIndex.vue')
const BlogArticle = () => import('./pages/BlogArticle.vue')
const TopicPage = () => import('./pages/TopicPage.vue')
const NotFound = () => import('./pages/NotFound.vue')

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', component: HomePage },
    { path: '/ksa', component: HomePage },
    { path: '/ksa360', component: HomePage },
    { path: '/ksa-360', component: HomePage },
    { path: '/expat', component: TopicPage, meta: { topic: 'expat' } },
    { path: '/saudi', component: TopicPage, meta: { topic: 'saudi' } },
    { path: '/saudi-arabia', component: TopicPage, meta: { topic: 'saudi' } },
    { path: '/marketplace', component: TopicPage, meta: { topic: 'marketplace' } },
    { path: '/community', component: TopicPage, meta: { topic: 'community' } },
    { path: '/prayer', component: TopicPage, meta: { topic: 'prayer' } },
    { path: '/jobs', component: TopicPage, meta: { topic: 'jobs' } },
    { path: '/coupons', component: CouponsPage },
    { path: '/offers', component: CouponsPage },
    { path: '/daily-in-ksa', component: CouponsPage },
    { path: '/download', component: DownloadPage },
    { path: '/app', component: DownloadPage },
    { path: '/get', component: DownloadPage },
    { path: '/blog', component: BlogIndex },
    { path: '/guides', component: BlogIndex },
    { path: '/blog/:slug', component: BlogArticle },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
})

function applyHead(path) {
  const seo = seoFor(path)
  document.title = seo.title
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', seo.description)
  const canon = document.querySelector('link[rel="canonical"]')
  if (canon) canon.setAttribute('href', `${SITE_URL}${path === '/' ? '/' : path}`)
  const ogt = document.querySelector('meta[property="og:title"]')
  const ogd = document.querySelector('meta[property="og:description"]')
  const ogu = document.querySelector('meta[property="og:url"]')
  if (ogt) ogt.setAttribute('content', seo.title)
  if (ogd) ogd.setAttribute('content', seo.description)
  if (ogu) ogu.setAttribute('href', `${SITE_URL}${path}`)
}

router.afterEach((to) => {
  applyHead(to.path)
})

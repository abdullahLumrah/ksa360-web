import { onMounted, ref } from 'vue'
import { API_URL } from '../config.js'
import { FEATURED_SHOP_IDS, featuredFallback } from '../content/featuredCoupons.js'

function withCodes(merchant) {
  const coupons = (merchant?.coupons || []).filter((row) => String(row.code || '').trim())
  if (!merchant || !coupons.length) return null
  return { ...merchant, coupons }
}

export function pickFeatured(merchants) {
  const byId = Object.fromEntries((merchants || []).map((row) => [row.id, row]))
  const live = FEATURED_SHOP_IDS.map((id) => withCodes(byId[id])).filter(Boolean)
  return live.length ? live : featuredFallback
}

export function useShops() {
  const categories = ref([])
  const featured = ref(featuredFallback)
  const loading = ref(true)

  onMounted(async () => {
    try {
      const res = await fetch(`${API_URL}/shops`)
      if (!res.ok) throw new Error('shops')
      const data = await res.json()
      categories.value = data.categories || []
      featured.value = pickFeatured(data.merchants)
    } catch {
      featured.value = featuredFallback
    } finally {
      loading.value = false
    }
  })

  return { categories, featured, loading }
}

export async function copyCode(code) {
  const value = String(code || '').trim()
  if (!value) return false
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}

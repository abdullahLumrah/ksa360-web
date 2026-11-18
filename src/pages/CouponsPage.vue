<script setup>
import { computed, onMounted, ref } from 'vue'
import StoreButtons from '../components/StoreButtons.vue'
import { copyCode, useShops } from '../composables/useShops.js'
import { reveal } from '../composables/useReveal.js'
import { t } from '../i18n.js'

const { categories, featured, loading } = useShops()
const copied = ref('')

const categoryTiles = computed(() =>
  (categories.value || []).map((row) => ({
    title: row.name,
    meta: `${row.merchantCount || 0} shops · ${row.couponCount || 0} coupons`,
  })),
)

async function onCopy(code) {
  const ok = await copyCode(code)
  if (!ok) return
  copied.value = code
  window.setTimeout(() => {
    if (copied.value === code) copied.value = ''
  }, 1600)
}

onMounted(() => document.querySelectorAll('.reveal').forEach((el, i) => reveal(el, { delay: i * 50 })))
</script>

<template>
  <main class="section">
    <p class="kicker reveal">{{ t.whiteFriday }}</p>
    <h1 class="reveal" style="font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -0.05em">{{ t.couponsTitle }}</h1>
    <p class="lead reveal">{{ t.couponsLead }}</p>

    <div class="coupon-grid" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))">
      <article v-for="shop in featured" :key="shop.id" class="ticket reveal">
        <span class="stamp">{{ t.liveNow || 'Live' }}</span>
        <h3>{{ shop.name }}</h3>
        <p>{{ shop.blurb }}</p>
        <div class="code-list">
          <button
            v-for="row in shop.coupons"
            :key="row.id"
            class="code"
            type="button"
            :class="{ copied: copied === row.code }"
            :title="row.detail || row.title"
            @click="onCopy(row.code)"
          >
            {{ copied === row.code ? t.copied : row.code }}
            <small>{{ row.title }}</small>
          </button>
        </div>
        <div class="shops">{{ t.copyCode }}</div>
      </article>
    </div>

    <p class="fine reveal">{{ t.moreInApp }}{{ loading ? ' · Updating from Daily in KSA…' : '' }}</p>

    <div v-if="categoryTiles.length" class="coupon-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); margin-top: 48px">
      <article v-for="item in categoryTiles" :key="item.title" class="ticket reveal">
        <span class="stamp">{{ t.openApp }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ t.wantCoupon }}</p>
        <div class="shops">{{ item.meta }}</div>
      </article>
    </div>

    <div class="reveal" style="margin-top: 36px">
      <StoreButtons />
    </div>
  </main>
</template>

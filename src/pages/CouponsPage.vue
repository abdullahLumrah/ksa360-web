<script setup>
import { onMounted } from 'vue'
import StoreButtons from '../components/StoreButtons.vue'
import { reveal } from '../composables/useReveal.js'
import { t } from '../i18n.js'

const brands = [
  { title: 'Perfumes & makeup', meta: '151 shops · 121 coupons' },
  { title: 'Groceries', meta: '24 shops · 9 coupons' },
  { title: 'Car wash', meta: '22 shops · 11 coupons' },
  { title: 'Maid & home', meta: '22 shops · 8 coupons' },
  { title: 'Shoes & sports', meta: '21 shops · 21 coupons' },
  { title: 'Fashion & outlets', meta: '75 shops · 80 coupons' },
  { title: 'Electronics', meta: '27 shops · 27 coupons' },
  { title: 'Food & restaurants', meta: '57 shops · 62 coupons' },
]

onMounted(() => document.querySelectorAll('.reveal').forEach((el, i) => reveal(el, { delay: i * 50 })))
</script>

<template>
  <main class="section">
    <p class="kicker reveal">Daily in KSA</p>
    <h1 class="reveal" style="font-size: clamp(2.2rem, 5vw, 3.6rem); letter-spacing: -0.05em">{{ t.couponsTitle }}</h1>
    <p class="lead reveal">{{ t.couponsLead }}</p>
    <div class="coupon-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))">
      <article v-for="item in brands" :key="item.title" class="ticket reveal">
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

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StoreButtons from '../components/StoreButtons.vue'
import { seoFor } from '../seo.js'

const route = useRoute()
const seo = computed(() => seoFor(route.path))

const extras = {
  expat: 'English by default. Arabic from Profile. Guest browsing on Home, coupons, marketplace, play, and prayer.',
  saudi: 'Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah, Neom — pick a city or use location for nearby and Fajr.',
  marketplace: 'Place an ad when signed in. Chat with sellers. Report abuse from community threads next door.',
  community: 'Like, comment, follow pages. Overflow menu: Report post and Report user. No paid features.',
  prayer: 'Umm Al-Qura calculation on device. Next prayer chip on Home and a full row on Profile.',
  jobs: 'Jobs sit in Categories next to clinics and schools. Sign in to post. Browse as a guest.',
}

const extra = computed(() => extras[route.meta.topic] || extras.expat)
</script>

<template>
  <main class="section" style="max-width: 800px">
    <p class="kicker">KSA 360</p>
    <h1 style="font-size: clamp(2.1rem, 4.5vw, 3.2rem); letter-spacing: -0.045em">{{ seo.title.split('|')[0] }}</h1>
    <p class="lead">{{ seo.description }}</p>
    <p class="lead">{{ extra }}</p>
    <StoreButtons />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { lang, setLang, t } from '../i18n.js'

const stuck = ref(false)
function onScroll() {
  stuck.value = window.scrollY > 8
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ 'is-stuck': stuck }">
    <router-link class="brand" to="/" aria-label="KSA 360 home">
      <img src="/brand/icon.png" alt="" width="36" height="36" />
      <span>KSA 360</span>
    </router-link>
    <nav class="nav-links">
      <router-link to="/coupons">{{ t.navCoupons }}</router-link>
      <router-link class="hide-sm" to="/blog">{{ t.navBlog }}</router-link>
      <button class="lang-btn" :class="{ 'is-on': lang === 'en' }" type="button" @click="setLang('en')">EN</button>
      <button class="lang-btn" :class="{ 'is-on': lang === 'ar' }" type="button" @click="setLang('ar')">ع</button>
      <router-link class="btn btn-gold" style="padding: 10px 16px" to="/download">{{ t.navGet }}</router-link>
    </nav>
  </header>
</template>

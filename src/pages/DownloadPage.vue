<script setup>
import StoreButtons from '../components/StoreButtons.vue'
import { t } from '../i18n.js'
</script>

<template>
  <main class="section center" style="max-width: 720px; margin: 0 auto">
    <img src="/brand/icon.png" alt="KSA 360" width="88" height="88" style="margin: 0 auto 18px; border-radius: 50%" />
    <p class="kicker">ksa-360.com</p>
    <h1 style="font-size: clamp(2.2rem, 5vw, 3.4rem); letter-spacing: -0.05em">{{ t.downloadTitle }}</h1>
    <p class="lead">{{ t.downloadLead }}</p>
    <StoreButtons center />
    <p class="fine">Package: com.ksaguide.ksa360 · Lumrah</p>
  </main>
</template>

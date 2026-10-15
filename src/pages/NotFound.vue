<script setup>
import { t } from '../i18n.js'
</script>

<template>
  <main class="section center">
    <h1>{{ t.notFound }}</h1>
    <router-link class="btn btn-gold" to="/">{{ t.backHome }}</router-link>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StoreButtons from '../components/StoreButtons.vue'
import { posts } from '../content/posts.js'

const route = useRoute()
const post = computed(() => posts.find((p) => p.slug === route.params.slug))
</script>

<template>
  <main v-if="post" class="article">
    <p class="kicker">{{ post.kicker }} · {{ post.read }}</p>
    <h1>{{ post.title }}</h1>
    <p v-for="(para, i) in post.body" :key="i">{{ para }}</p>
    <StoreButtons />
  </main>
  <main v-else class="section center">
    <h1>Guide not found</h1>
    <router-link class="btn btn-gold" to="/blog">All guides</router-link>
  </main>
</template>

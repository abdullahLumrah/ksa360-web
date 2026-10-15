<script setup>
import { posts } from '../content/posts.js'
import { t } from '../i18n.js'
</script>

<template>
  <main class="section">
    <p class="kicker">KSA · KSA360 · guides</p>
    <h1 style="font-size: clamp(2.2rem, 5vw, 3.4rem); letter-spacing: -0.05em">{{ t.blogTitle }}</h1>
    <p class="lead">{{ t.blogLead }}</p>
    <div class="grid-cards">
      <router-link v-for="post in posts" :key="post.slug" class="card-link" :to="`/blog/${post.slug}`">
        <span>{{ post.kicker }} · {{ post.read }}</span>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
      </router-link>
    </div>
  </main>
</template>

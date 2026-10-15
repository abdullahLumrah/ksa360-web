<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import StoreButtons from '../components/StoreButtons.vue'
import { reveal } from '../composables/useReveal.js'
import { t } from '../i18n.js'

const shots = [
  { src: '/shots/home.jpg', alt: 'KSA 360 home — coupons and marketplace' },
  { src: '/shots/marketplace.jpg', alt: 'KSA 360 marketplace' },
  { src: '/shots/categories.jpg', alt: 'KSA 360 categories' },
  { src: '/shots/play.jpg', alt: 'KSA 360 play and activities' },
  { src: '/shots/profile.jpg', alt: 'KSA 360 profile and prayer times' },
]
const idx = ref(0)
let timer

const tickets = [
  { title: 'Perfumes & makeup', shops: '151 shops · 121 coupons' },
  { title: 'Groceries', shops: '24 shops · 9 coupons' },
  { title: 'Car wash', shops: '22 shops · 11 coupons' },
  { title: 'Fashion & outlets', shops: '75 shops · 80 coupons' },
]

const features = [
  { icon: '🏷', title: 'Daily in KSA', text: 'Coupons and brands — perfume, groceries, car wash, fashion — tap through in the app.' },
  { icon: '🛍', title: 'Marketplace', text: 'Cars, furniture, phones, real estate. Chat after you sign in. Meet in public.' },
  { icon: '💬', title: 'Community', text: 'Pages for housing, visas, schools, weekends. Report posts and users from the menu.' },
  { icon: '🎬', title: 'Play & eat', text: 'Karting, dunes, cinema, malls, and food nearby — Arab, Chinese, Desi, and more.' },
  { icon: '🕌', title: 'Prayer', text: 'Umm Al-Qura times for your city. English default, Arabic from Profile.' },
]

onMounted(() => {
  timer = setInterval(() => {
    idx.value = (idx.value + 1) % shots.length
  }, 3200)
  document.querySelectorAll('.reveal').forEach((el, i) => reveal(el, { delay: i * 70 }))
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="kicker">{{ t.heroKicker }}</p>
        <h1>
          {{ t.heroTitleA }}
          <br />
          <em>{{ t.heroTitleB }}</em>
        </h1>
        <p class="lead">{{ t.heroLead }}</p>
        <StoreButtons />
        <p class="fine">{{ t.report }}</p>
      </div>
      <div class="hero-art" aria-hidden="false">
        <div class="orb" />
        <div class="rings" />
        <div class="phone">
          <div class="phone-notch" />
          <img
            :key="shots[idx].src"
            class="phone-fade"
            :src="shots[idx].src"
            :alt="shots[idx].alt"
            width="250"
            height="540"
          />
        </div>
      </div>
    </section>

    <div class="marquee-wrap">
      <div class="marquee">
        <span v-for="n in 8" :key="n">{{ t.cities }} · KSA 360 ·</span>
      </div>
    </div>

    <section id="coupons" class="section">
      <p class="kicker reveal">{{ t.wantCoupon }}</p>
      <h2 class="reveal">{{ t.wantCoupon }}</h2>
      <p class="lead reveal">{{ t.couponLead }}</p>
      <div class="coupon-grid">
        <article v-for="(item, i) in tickets" :key="item.title" class="ticket reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
          <span class="stamp">{{ t.openApp }}</span>
          <h3>{{ item.title }}</h3>
          <p>Unlock in Daily in KSA.</p>
          <div class="shops">{{ item.shops }}</div>
        </article>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <p class="kicker reveal">{{ t.featuresKicker }}</p>
      <h2 class="reveal">{{ t.featuresTitle }}</h2>
      <div class="bento">
        <article class="tile wide reveal">
          <div class="icon">{{ features[0].icon }}</div>
          <h3>{{ features[0].title }}</h3>
          <p>{{ features[0].text }}</p>
        </article>
        <article v-for="item in features.slice(1)" :key="item.title" class="tile reveal">
          <div class="icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <p class="kicker reveal">{{ t.howKicker }}</p>
      <h2 class="reveal">{{ t.howTitle }}</h2>
      <div class="steps">
        <article class="step reveal">
          <div class="num">01</div>
          <h3>{{ t.step1 }}</h3>
          <p>{{ t.step1b }}</p>
        </article>
        <article class="step reveal">
          <div class="num">02</div>
          <h3>{{ t.step2 }}</h3>
          <p>{{ t.step2b }}</p>
        </article>
        <article class="step reveal">
          <div class="num">03</div>
          <h3>{{ t.step3 }}</h3>
          <p>{{ t.step3b }}</p>
        </article>
      </div>
    </section>

    <section class="cta-band reveal">
      <h2>{{ t.ctaTitle }}</h2>
      <p class="lead">{{ t.ctaLead }}</p>
      <StoreButtons center />
    </section>
  </main>
</template>

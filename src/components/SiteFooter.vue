<script setup>
import { DELETE_URL, PRIVACY_URL } from '../config.js'
import { t } from '../i18n.js'
</script>

<template>
  <footer class="site-footer">
    <div>
      <strong style="color: var(--navy)">KSA 360</strong>
      <p style="margin: 6px 0 0">{{ t.footerTag }}</p>
      <p style="margin: 6px 0 0">© 2026 Lumrah Solutions Private Limited</p>
    </div>
    <div class="foot-links">
      <router-link to="/download">{{ t.navGet }}</router-link>
      <router-link to="/coupons">{{ t.navCoupons }}</router-link>
      <router-link to="/blog">{{ t.navBlog }}</router-link>
      <a :href="PRIVACY_URL" rel="noopener" target="_blank">{{ t.privacy }}</a>
      <a :href="DELETE_URL" rel="noopener" target="_blank">{{ t.delete }}</a>
    </div>
  </footer>
</template>

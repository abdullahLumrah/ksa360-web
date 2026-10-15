<script setup>
import { APP_STORE_READY, APP_STORE_URL, PLAY_STORE_URL } from '../config.js'
import { t } from '../i18n.js'

defineProps({
  center: { type: Boolean, default: false },
})
</script>

<template>
  <div class="cta-row" :class="{ 'store-row': center }">
    <a class="btn btn-green" :href="PLAY_STORE_URL" rel="noopener" target="_blank">
      <span aria-hidden="true">▶</span>
      {{ t.onPlay }}
    </a>
    <a
      class="btn btn-ghost"
      :class="{ soon: !APP_STORE_READY }"
      :href="APP_STORE_READY ? APP_STORE_URL : '#app-store'"
      :aria-disabled="!APP_STORE_READY"
      @click="!APP_STORE_READY && $event.preventDefault()"
    >
      <span aria-hidden="true"></span>
      {{ APP_STORE_READY ? t.onStore : t.storeSoon }}
    </a>
  </div>
</template>

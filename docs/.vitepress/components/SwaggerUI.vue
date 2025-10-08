<template>
  <div v-if="mounted">
    <div :id="domId"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'swagger-ui-dist/swagger-ui.css'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-bundle'

const props = defineProps({
  url: { type: String, required: true },
  domId: { type: String, default: 'swagger-ui' },
  oauthConfig: { type: Object, default: null }
})

const mounted = ref(false)
const domId = props.domId

onMounted(() => {
  mounted.value = true
  SwaggerUI({
    dom_id: `#${domId}`,
    url: props.url,
    presets: [SwaggerUI.presets.apis, SwaggerUI.SwaggerUIStandalonePreset],
    layout: 'BaseLayout'
  })
  if (props.oauthConfig && window.ui) {
    window.ui.initOAuth(props.oauthConfig)
  }
})
</script>

<style>
/* small override so it fits inside VitePress content */
#swagger-ui { box-shadow: none; border: none; }
</style>
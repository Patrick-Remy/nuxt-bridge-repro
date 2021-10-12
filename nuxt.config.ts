import { defineNuxtConfig, NuxtConfig } from '@nuxt/bridge'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt3-repro'
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir
  srcDir: 'src',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
  ],
}

export default defineNuxtConfig(config)

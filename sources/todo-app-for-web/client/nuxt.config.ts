import { NuxtConfig } from '@nuxt/types'
import bootstrap from '../server/dist/main'
const isDev = process.env.NODE_ENV === 'development';

const config: NuxtConfig = async () => ({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Todoアプリを作るハンズオン用のサンプルコード' }
    ],
  },

  server: {
      port: 3100
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  serverMiddleware: isDev ? [] : [{ path: '/api', handler: await bootstrap() }],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      baseURL: isDev ? 'http://localhost:8080/api' : 'http://localhost:3100/api'
  },
})

export default config
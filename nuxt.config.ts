// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
		// '@/assets/scss/default.scss',
    '@/assets/styles.css',
    '~/assets/css/main.css',
	],
  build: {
    transpile: ['gsap'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

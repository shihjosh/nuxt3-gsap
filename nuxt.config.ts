// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
		// '@/assets/scss/default.scss',
    '@/assets/styles.css',
	],
  build: {
    transpile: ['gsap'],
  },
})

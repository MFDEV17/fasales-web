export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    'radix-vue/nuxt',
    '@vee-validate/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  veeValidate: {
    autoImports: true,
  },

  devtools: { enabled: true },

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  tailwindcss: {
    config: {
      plugins: [require('tailwind-scrollbar-hide')],
      theme: {
        keyframes: {
          'collapsible-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-collapsible-content-height)' },
          },
          'collapsible-up': {
            from: { height: 'var(--radix-collapsible-content-height)' },
            to: { height: '0' },
          },
          counterShow: {
            from: { opacity: '0', transform: 'scale(0.9)' },
            to: { opacity: '1', transform: 'scale(1)' },
          },
          counterHide: {
            from: { opacity: '1', transform: 'scale(1)' },
            to: { opacity: '0', transform: 'scale(0.9)' },
          },
          overlayShow: {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          overlayHide: {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          contentShow: {
            from: {
              opacity: '0',
              transform: 'translate(-50%, -48%) scale(0.96)',
            },
            to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          },
        },
        animation: {
          counterShow: 'counterShow 200ms ease-in-out',
          counterHide: 'counterHide 200ms ease-in-out',
          overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          overlayHide: 'overlayHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          'collapsible-down': 'collapsible-down 0.3s ease-in-out',
          'collapsible-up': 'collapsible-up 0.3s ease-in-out',
        },
        screens: {
          md: '393px',
        },
        colors: {
          failure: '#F25A5A',
          black: '#000000',
          telegram: {
            link: '#5AC8FB',
            hint: '#8B8B8B',
            text: '#020202',
            btn: '#5AC8FB',
            'btn-text': '#FFFFFF',
            bg: {
              primary: '#FFFFFF',
              secondary: '#F3F2F8',
            },
          },
        },
      },
    },
  },

  compatibilityDate: '2024-09-20',
})


export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss'],
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
      theme: {
        keyframes: {
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
          overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          overlayHide: 'overlayHide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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
})

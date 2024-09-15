export default defineNuxtPlugin(() => {
  const urlShorter = (url: string): string => {
    return new URL(url).hostname
  }

  return {
    provide: { urlShorter },
  }
})

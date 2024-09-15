export default defineNuxtPlugin(() => {
  function formatNumber(num: number) {
    return num.toLocaleString('fr-FR')
  }

  return {
    provide: { formatNumber },
  }
})

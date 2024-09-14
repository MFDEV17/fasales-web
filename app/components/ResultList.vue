<script setup lang="ts">
const cartStore = useCartStore()
const {
  currencies,
  countries,
  countryChoice,
  methodChoice,
  currencyChoice,
  storeCarts,
} = storeToRefs(cartStore)
</script>

<template>
  <div class="bg-telegram-bg-secondary text-telegram-text"></div>
</template>

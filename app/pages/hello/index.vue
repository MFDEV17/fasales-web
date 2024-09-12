<script setup lang="ts">
const store = useCartStore()

const { get } = useCountryData()
await get()
</script>
<template>
  <div>{{ store.countryChoice }}</div>
  <div>{{ store.methodChoice }}</div>
  <div>{{ store.currencyChoice }}</div>
</template>

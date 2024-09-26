<script setup lang="ts">
const store = useCartStore()
const { generateShopList } = storeToRefs(store)
await callOnce(store.initState)
</script>
<template>
  <div v-for="g in generateShopList">{{ g }}</div>

  <NuxtLink to="/cart">next</NuxtLink>
</template>

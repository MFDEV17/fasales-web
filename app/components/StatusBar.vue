<script setup lang="ts">
const store = useCartStore()
</script>

<template>
  <div class="p-4 bg-black text-telegram-link">{{ store.currencyChoice }}</div>
</template>

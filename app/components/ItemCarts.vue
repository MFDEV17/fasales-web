<script setup lang="ts">
const carts = useCartStore()
const { storeCarts } = storeToRefs(carts)
</script>

<template>
  <section class="space-y-2 px-3 pb-20 pt-4">
    <ItemCart v-for="c in storeCarts" :cart="c" />
  </section>
</template>

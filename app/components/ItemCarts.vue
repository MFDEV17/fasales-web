<script setup lang="ts">
const cartStore = useCartStore();
const { carts } = storeToRefs(cartStore);
</script>

<template>
  <section class="space-y-2 px-3 pb-20 pt-4">
    <ItemCart v-for="cart in carts" :cart="cart" />
  </section>
</template>

<script setup lang="ts">
const store = useCartStore();
const { currencyChoice } = storeToRefs(store);
</script>

<template>
  <div
    class="text-telegram-bg-primary bg-black p-4 text-center text-sm font-medium"
  >
    <span class="pr-1">💶</span>
    Актуальный курс: {{ currencyChoice?.amountToEuro
    }}{{ currencyChoice?.currencySymbol }} за €1
  </div>
</template>

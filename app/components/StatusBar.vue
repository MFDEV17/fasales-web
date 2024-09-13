<script setup lang="ts">
const store = useCartStore()
const { currencyChoice } = storeToRefs(store)
</script>

<template>
  <div
    class="p-4 bg-black text-telegram-bg-primary font-medium text-sm text-center"
  >
    <span class="pr-1">💶</span>
    Актуальный курс: {{ currencyChoice?.amountToEuro
    }}{{ currencyChoice?.currencySymbol }} за €1
  </div>
</template>

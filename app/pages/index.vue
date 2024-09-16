<script setup lang="ts">
const { get } = useInitData()
await get()
</script>

<template>
  <div
    class="text-telegram-text grid min-h-dvh place-content-center place-items-center space-y-9 px-6"
  >
    <NuxtImg src="shaking-hand.png" class="block self-center" />
    <div class="space-y-8">
      <h3 class="text-center text-4xl font-semibold">
        Привет, <span class="text-telegram-link">Влад</span>!
      </h3>
      <div class="text-telegram-hint space-y-5">
        <p>
          Это приложение поможет тебе рассчитать стоимость доставки из Европы.
        </p>
        <p>Добавь нужные товары и укажи их стоимость, а остальное за нами.</p>
      </div>
    </div>
    <NuxtLink to="/cart">next</NuxtLink>
  </div>
</template>

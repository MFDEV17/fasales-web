<script setup lang="ts">
const store = useCartStore()
const { calculateResult } = storeToRefs(store)
</script>

<template>
  <div>
    <StatusBar />

    <div class="px-4 pt-14">
      <div class="flex items-center justify-center flex-col">
        <NuxtImg src="/love.png" class="size-56" />
        <div class="space-y-2 text-center pt-4">
          <p class="font-bold text-[40px]">
            {{ $formatNumber(calculateResult.finalSumPrice) }}
            {{ calculateResult.currencyChoice.value?.currencySymbol }}
          </p>
          <p class="font-medium text-telegram-hint">Финальная стоимость</p>
        </div>
        <GradientContent class="mt-8">
          <div class="flex items-center gap-x-3 text-telegram-text">
            <span class="text-[44px]">🏋️‍♀️</span>
            <div class="space-y-2">
              <p class="font-semibold">Лимит веса</p>
              <p class="text-sm">
                Вес посылки выше допустимого лимита, стоимость доставки может
                быть выше.
              </p>
            </div>
          </div>
        </GradientContent>

        <Voucher />

        <GradientContent class="mb-10">
          <div class="flex items-center gap-x-3 text-telegram-text">
            <span class="text-[44px]">📦</span>
            <div class="space-y-2" v-if="calculateResult.deliveryTime">
              <p class="font-semibold">
                Доставим за ±{{ calculateResult.deliveryTime }}
                {{ formatDay(calculateResult.deliveryTime) }}
              </p>
              <p class="text-sm">Посылка приедет в отделение Почты России.</p>
            </div>
          </div>
        </GradientContent>
      </div>
      <div class="flex items-center gap-x-3">
        <NuxtLink to="/cart">back</NuxtLink>
        <NuxtLink to="/order">next</NuxtLink>
      </div>
    </div>
  </div>
</template>

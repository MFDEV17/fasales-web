<script setup lang="ts"></script>

<template>
  <div>
    <StatusBar />

    <div class="px-4 pt-14">
      <div class="flex flex-col items-center justify-center">
        <NuxtImg src="/love.png" class="size-56" />
        <div class="space-y-2 pt-4 text-center">
          <p class="text-[40px] font-bold"></p>
          <p class="text-telegram-hint font-medium">Финальная стоимость</p>
        </div>
        <GradientContent class="mt-8">
          <div class="text-telegram-text flex items-center gap-x-3">
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
          <div class="text-telegram-text flex items-center gap-x-3">
            <span class="text-[44px]">📦</span>
            <div class="space-y-2">
              <p class="font-semibold"></p>
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

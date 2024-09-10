<script setup lang="ts">
import { useFetch } from "@vueuse/core";

const { data } = useFetch(
  "https://vr7v33hg.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27currency%27%5D%7B_id%2C+currencyCode%2C+currencyName%2C+amountToEuro%7D",
);
</script>

<template>
  <div
    class="text-telegram-text grid min-h-dvh place-content-center place-items-center space-y-9 px-6"
  >
    {{ data }}
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
  </div>
</template>

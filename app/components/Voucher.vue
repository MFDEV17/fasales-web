<script setup lang="ts">
const open = ref(false)

const store = useCartStore()
const { calculateResult } = storeToRefs(store)
const {
  itemsPriceSumUserCurrency,
  itemsPriceSumEuro,
  itemWeightSum,
  currencyChoice,
  deliveryPriceCurrencyChoice,
} = calculateResult.value
</script>

<template>
  <CollapsibleRoot
    class="w-full flex flex-col justify-center items-center group mt-4"
    v-model:open="open"
  >
    <div
      class="bg-telegram-bg-secondary text-telegram-text w-full rounded-[20px] px-5"
    >
      <ul class="space-y-2 pt-5 pb-5">
        <li class="flex items-center justify-between">
          <p>Стоимость товаров</p>
          <p>
            {{ itemsPriceSumUserCurrency }} {{ currencyChoice?.currencyCode }} /
            <span class="pr-0.5">€</span>{{ itemsPriceSumEuro }}
          </p>
        </li>
        <li class="flex items-center justify-between">
          <p>Стоимость доставки</p>
          <p>
            {{ deliveryPriceCurrencyChoice
            }}<span class="pl-0.5">{{ currencyChoice?.currencySymbol }}</span>
          </p>
        </li>
        <li class="flex items-center justify-between">
          <p>Вес посылки</p>
          <p>{{ itemWeightSum }} кг</p>
        </li>
      </ul>
      <CollapsibleContent
        class="group-data-[state=closed]:animate-collapsible-up group-data-[state=open]:animate-collapsible-down overflow-hidden transition-all"
      >
        <ul class="space-y-2 pb-5 pt-5">
          <li class="flex items-center justify-between">
            <p>hello</p>
            <p>hello</p>
          </li>
          <li class="flex items-center justify-between">
            <p>hello</p>
            <p>hello</p>
          </li>
          <li class="flex items-center justify-between">
            <p>hello</p>
            <p>hello</p>
          </li>
        </ul>
      </CollapsibleContent>
    </div>

    <CollapsibleTrigger as-child>
      <div
        class="flex items-center uppercase gap-x-2 cursor-pointer pt-3 text-telegram-hint pb-7"
      >
        <p>{{ open ? 'Меньше' : 'Большe' }}</p>
        <IconsArrow
          class="stroke-telegram-hint group-data-[state=open]:rotate-180 transition-transform duration-300"
        />
      </div>
    </CollapsibleTrigger>
  </CollapsibleRoot>
</template>

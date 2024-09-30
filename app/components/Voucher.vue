<script setup lang="ts">
const open = ref(false);
const store = useCartStore();
const {
  getWeightSum,
  getDeliveryPrice,
  getCartsPrice,
  currencyChoice,
  getCartsListWithCurrencyChoice,
} = storeToRefs(store);
</script>

<template>
  <CollapsibleRoot
    class="group mt-4 flex w-full flex-col items-center justify-center"
    v-model:open="open"
  >
    <div
      class="bg-telegram-bg-secondary text-telegram-text w-full rounded-[20px] px-5"
    >
      <ul class="leaders space-y-2 pb-5 pt-5">
        <li class="*:bg-telegram-bg-secondary">
          <span>Стоимость товаров</span>
          <span>
            € {{ getCartsPrice?.sumEuro }} /
            {{ getCartsPrice?.sumCurrencyChoice }}
            {{ currencyChoice?.currencySymbol }}
          </span>
        </li>
        <li class="*:bg-telegram-bg-secondary">
          <span>Стоимость доставки</span>
          <span
            >{{ getDeliveryPrice }} {{ currencyChoice?.currencySymbol }}</span
          >
        </li>
        <li class="*:bg-telegram-bg-secondary">
          <span>Вес посылки</span>
          <span>{{ getWeightSum }} кг</span>
        </li>
      </ul>
      <CollapsibleContent
        class="group-data-[state=closed]:animate-collapsible-up group-data-[state=open]:animate-collapsible-down overflow-hidden transition-all"
      >
        <ul class="leaders space-y-2 py-5 [counter-reset:chapter_0]">
          <li
            class="text-telegram-hint bg-telegram-bg-secondary [counter-increment:chapter_1] before:[content:counter(chapter)'.']"
            v-for="cart in getCartsListWithCurrencyChoice"
          >
            <span class="bg-telegram-bg-secondary text-telegram-text">
              {{ cart.categoryRef.singleName || cart.categoryRef.categoryName }}
            </span>
            <span class="bg-telegram-bg-secondary text-telegram-text">
              {{ cart.weight }} кг <span class="text-telegram-hint">/</span
              >{{ cart.currencyChoicePrice }}
            </span>
          </li>
        </ul>
      </CollapsibleContent>
    </div>

    <CollapsibleTrigger as-child>
      <div
        class="text-telegram-hint flex cursor-pointer items-center gap-x-2 pb-7 pt-3 uppercase"
      >
        <p>{{ open ? "Меньше" : "Большe" }}</p>
        <IconsArrow
          class="stroke-telegram-hint transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
      </div>
    </CollapsibleTrigger>
  </CollapsibleRoot>
</template>

<style lang="css">
ul.leaders,
ol.leaders {
  max-width: 40em;
  overflow-x: hidden;
  white-space: nowrap;
}
ol.leaders li:before,
ul.leaders li:before {
  float: left;
  width: 0;
  white-space: nowrap;
  content: ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . ";
}
ol.leader span:first-child,
ul.leaders span:first-child {
  overflow-x: scroll;
  padding-right: 0.33em;
}
ol.leader span + span,
ul.leaders span + span {
  float: right;
  padding-left: 0.33em;
}
</style>

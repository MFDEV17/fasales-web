<script setup lang="ts">
import type { Category } from "~/types/types";

const dialogStore = useDialogStore();
const cartStore = useCartStore();

const { categories } = storeToRefs(cartStore);
const dialog = useDialogStore();

const goToNextStep = (category: Category) => {
  dialog.setCategoryRef(category);
  dialogStore.goNextStep();
};
</script>

<template>
  <div
    class="text-telegram-text mb-12 grid grid-cols-3 place-content-around gap-y-6 px-3 py-6"
  >
    <div
      class="flex cursor-pointer flex-col items-center space-y-2 text-sm font-medium"
      v-for="c in categories"
      @click="goToNextStep(c)"
    >
      <div class="bg-telegram-bg-primary rounded-[24px] p-4">
        <NuxtImg :src="$urlFor(c.categoryImg).url()" class="size-[60px]" />
      </div>
      <p class="overflow-hidden truncate">{{ c.categoryName }}</p>
    </div>
  </div>
  <div
    class="text-telegram-hint bg-telegram-bg-primary fixed bottom-0 w-full p-4 text-center text-sm shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]"
  >
    Выберите категорию товара
  </div>
</template>

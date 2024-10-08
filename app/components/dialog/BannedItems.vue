<script setup lang="ts">
import { DrawerClose, DrawerTrigger } from "vaul-vue";

const cartStore = useCartStore();
const { bannedItems } = storeToRefs(cartStore);
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <p class="text-telegram-link mt-5 cursor-pointer text-sm underline">
        Список товаров запрещённых к пересылке
      </p>
    </DrawerTrigger>
    <DrawerContent>
      <div
        class="flex flex-col items-center justify-center space-y-6 pb-4 pt-6"
      >
        <NuxtImg src="sad-face.png" width="180" height="180" />

        <div class="flex flex-col space-y-6 px-6">
          <p>К сожалению, из Европы в Россию можно отправлять не все товары.</p>

          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">Запрещено к пересылке</h3>
            <ul class="list-inside list-disc">
              <li v-for="item in bannedItems" :key="item._id">
                {{ item.bannedCategory }}
              </li>
            </ul>
          </div>

          <DrawerClose as-child>
            <button
              class="bg-telegram-btn text-telegram-btn-text self-center rounded-lg px-2.5 py-2 uppercase outline-none"
            >
              понятно
            </button>
          </DrawerClose>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

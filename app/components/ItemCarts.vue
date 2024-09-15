<script setup lang="ts">
import type { StoreItem } from '~/types/StoreItem'

const dialog = useDialogStore()
const carts = useCartStore()
const { storeCarts, currencyChoice } = storeToRefs(carts)

const setUpdateProps = (cart: StoreItem) => {
  dialog.changeType('update')
  dialog.setCartRef(cart)
}
</script>

<template>
  <section class="space-y-2 px-3 pb-20 pt-4">
    <DialogTrigger as-child v-for="cart in storeCarts" class="cursor-pointer">
      <div
        class="bg-telegram-bg-primary rounded-xl"
        @click="setUpdateProps(cart)"
      >
        <div class="flex">
          <div class="self-center px-4 shrink-0">
            <NuxtImg
              :src="urlFor(cart.categoryRef.categoryImg).url()"
              class="size-16"
            />
          </div>
          <div
            class="border-l-telegram-bg-secondary grow border-l py-3 px-4 min-w-0"
          >
            <p class="font-semibold">
              {{ cart.categoryRef.singleName || cart.categoryRef.categoryName }}
            </p>
            <div class="py-2 text-nowrap whitespace-nowrap">
              <p
                class="text-2xl font-semibold overflow-auto"
                @click="(e) => e.stopPropagation()"
              >
                <span class="pr-0.5">€</span>{{ cart.price }}
                <span class="text-telegram-hint" v-if="currencyChoice"
                  >≈ {{ currencyChoice?.amountToEuro * cart.price
                  }}{{ currencyChoice?.currencySymbol }}</span
                >
              </p>
              <p class="text-telegram-hint pt-0.5 text-sm font-medium">
                +340 ₽ доставка на склад
              </p>
              <p class="pt-2 font-medium">
                {{ cart.categoryRef.categoryDefWeight || cart.weight }} кг
              </p>
            </div>
            <div
              @click="(e) => e.stopPropagation()"
              class="text-telegram-link flex items-center gap-x-1 text-sm italic"
            >
              <IconsLink />
              <NuxtLink :to="cart.productLink" target="_blank"
                >{{ $urlShorter(cart.productLink) }} ...</NuxtLink
              >
            </div>
          </div>
          <div class="flex shrink-0 flex-col justify-between py-2.5 pr-2">
            <button
              @click="(e) => e.stopPropagation()"
              class="bg-telegram-bg-secondary text-telegram-hint inline-flex size-8 items-center justify-center rounded-lg font-medium"
            >
              {{ cart.count }}
            </button>
            <button
              @click="
                (e) => {
                  e.stopPropagation()
                  carts.removeItem(cart.itemId)
                }
              "
              class="inline-flex size-8 items-center justify-center rounded-lg bg-[#F25A5A]"
            >
              <IconsTrash />
            </button>
          </div>
        </div>
      </div>
    </DialogTrigger>
  </section>
</template>

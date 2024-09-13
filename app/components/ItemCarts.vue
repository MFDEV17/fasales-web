<script setup lang="ts">
const dialog = useDialogStore()
const carts = useCartStore()
const { storeCarts, currencyChoice } = storeToRefs(carts)
</script>

<template>
  <section class="space-y-2 px-3 pb-20 pt-4">
    <DialogTrigger as-child v-for="cart in storeCarts">
      <div
        class="bg-telegram-bg-primary rounded-xl"
        @click="dialog.changeType('update')"
      >
        <div class="flex">
          <div class="self-center px-4">
            <NuxtImg
              :src="urlFor(cart.categoryRef.categoryImg).url()"
              class="size-16"
            />
          </div>
          <div class="border-l-telegram-bg-secondary grow border-l py-3 pl-4">
            <p class="font-semibold">{{ cart.categoryRef.singleName }}</p>
            <div class="py-2">
              <p class="text-2xl font-semibold">
                <span>€</span>{{ cart.price }}
                <span class="text-telegram-hint"
                  >≈ {{ currencyChoice?.amountToEuro }}</span
                >
              </p>
              <p class="text-telegram-hint pt-0.5 text-sm font-medium">
                +340 ₽ доставка на склад
              </p>
              <p class="pt-2 font-medium">
                {{ cart.categoryRef.categoryDefWeight || cart.weight }}
              </p>
            </div>
            <div
              class="text-telegram-link flex items-center gap-x-1 text-sm italic"
            >
              <IconsLink />
              <NuxtLink :to="cart.productLink" target="_blank">{{
                cart.productLink
              }}</NuxtLink>
            </div>
          </div>
          <div class="flex shrink flex-col justify-between py-2.5 pr-2">
            <button
              class="bg-telegram-bg-secondary text-telegram-hint inline-flex size-8 items-center justify-center rounded-lg font-medium"
            >
              {{ cart.count }}
            </button>
            <button
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

<script setup lang="ts">
import type { StoreItem } from "~/types/types";

const props = defineProps<{ cart: StoreItem }>();

const dialog = useDialogStore();
const carts = useCartStore();
const { currencyChoice } = storeToRefs(carts);

const setUpdateProps = () => {
  dialog.changeType("update");
  dialog.setCartRef(props.cart);
};

const counterOpen = ref(false);
const cartRef = ref(null);

onClickOutside(cartRef, (e) => {
  counterOpen.value = false;
});
</script>

<template>
  <DialogTrigger as-child class="cursor-pointer">
    <div class="bg-telegram-bg-primary rounded-xl" @click="setUpdateProps">
      <div class="flex">
        <div class="shrink-0 self-center px-4">
          <NuxtImg
            :src="urlFor(props.cart.categoryRef.categoryImg).url()"
            class="size-16"
          />
        </div>
        <div
          class="border-l-telegram-bg-secondary min-w-0 grow border-l px-4 py-3"
        >
          <p class="font-semibold">
            {{
              props.cart.categoryRef.singleName ||
              props.cart.categoryRef.categoryName
            }}
          </p>
          <div class="whitespace-nowrap text-nowrap py-2">
            <p
              class="overflow-auto text-2xl font-semibold"
              @click="(e) => e.stopPropagation()"
            >
              <span class="pr-0.5">€</span>{{ cart.price * cart.count }}
              <span class="text-telegram-hint" v-if="currencyChoice"
                >≈ {{ currencyChoice?.amountToEuro * cart.price * cart.count
                }}{{ currencyChoice?.currencySymbol }}</span
              >
            </p>
            <p class="text-telegram-hint pt-0.5 text-sm font-medium">
              +340 ₽ доставка на склад
            </p>
            <p class="pt-2 font-medium">
              {{
                (cart.categoryRef.categoryDefWeight || cart.weight) * cart.count
              }}
              кг
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
        <div
          class="flex shrink-0 flex-col justify-between py-2.5 pr-2"
          ref="cartRef"
        >
          <div class="relative">
            <div
              :data-isOpen="counterOpen"
              class="data-[isOpen=true]:animate-counterShow data-[isOpen=false]:animate-counterHide bg-telegram-btn absolute -left-[12%] -top-[1.8rem] z-10 flex h-[88px] w-10 flex-col items-center justify-between rounded-[10px] py-1.5 transition-all data-[isOpen=false]:pointer-events-none data-[isOpen=false]:opacity-0 data-[isOpen=true]:shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]"
            >
              <IconsPlusButton
                @click="
                  (e) => {
                    e.stopPropagation();
                    carts.incermentCartCount(cart.itemId);
                  }
                "
              />
              <IconsMinusButton
                @click="
                  (e) => {
                    e.stopPropagation();
                    carts.decermentCartCount(cart.itemId);
                  }
                "
              />
            </div>
            <button
              @click="
                (e) => {
                  e.stopPropagation();
                  counterOpen = !counterOpen;
                }
              "
              class="bg-telegram-bg-secondary text-telegram-hint relative z-20 inline-flex size-8 items-center justify-center rounded-lg font-medium"
            >
              {{ cart.count }}
            </button>
          </div>

          <button
            @click="
              (e) => {
                e.stopPropagation();
                carts.removeCart(cart.itemId);
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
</template>

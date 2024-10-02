<script setup lang="ts">
import { storeItemSchema } from "~/types/types";

const dialog = useDialogStore();
const { cartRef } = storeToRefs(dialog);

const cartStore = useCartStore();
const { shops } = storeToRefs(cartStore);

const {
  handleSubmit,
  setFieldValue,
  values: { weight },
} = useForm({
  validationSchema: toTypedSchema(storeItemSchema),
  initialValues: {
    weight: cartRef.value?.categoryRef.categoryDefWeight,
    price: cartRef.value?.price,
    size: cartRef.value?.size,
    productLink: cartRef.value?.productLink,
    count: cartRef.value?.count,
    extraDeliveryPrice: cartRef.value?.extraDeliveryPrice,
  },
});

const link = useFieldValue<string>("productLink");
const extraDeliveryPrice = useFieldValue<number>("extraDeliveryPrice");

watchDebounced(
  link,
  () => {
    const userURL = new URL(link.value).hostname;
    const urlShop = shops.value.find(
      (i) => new URL(i.shopLink).hostname === userURL,
    );

    if (urlShop) {
      setFieldValue("extraDeliveryPrice", urlShop.deliveryPrice);
      return;
    } else {
      setFieldValue("extraDeliveryPrice", 0);
      return;
    }
  },
  { debounce: 600 },
);

const onSubmit = handleSubmit((val) => {
  if (cartRef.value) {
    cartStore.editCart(cartRef.value.itemId, val);
    dialog.toggleOpenDialog();
  }
});
</script>

<template>
  <div
    class="bg-telegram-bg-primary text-telegram-text min-h-full overflow-y-scroll px-5 py-6"
  >
    <div class="flex flex-col items-center justify-center">
      <NuxtImg
        v-if="cartRef?.categoryRef.categoryImg"
        :src="urlFor(cartRef?.categoryRef.categoryImg).url()"
        class="size-[92px]"
      />
      <div class="mt-5 flex items-center gap-x-2 text-2xl font-semibold">
        <h3>
          {{
            cartRef?.categoryRef.singleName || cartRef?.categoryRef.categoryName
          }}
        </h3>

        <IconsPencil />
      </div>
      <ul class="text-telegram-hint mt-2 space-y-1 text-center text-sm">
        <li v-if="cartRef?.categoryRef.categoryDefWeight">
          Расчётный вес —
          {{ cartRef.categoryRef.categoryDefWeight }}
          кг
        </li>
        <li>Комиссия за выкуп — 200 ₽</li>
      </ul>

      <DialogBannedItems v-if="!weight || weight == 0" />

      <ul
        class="text-failure mt-6 list-outside list-disc space-y-1 self-start pl-7 text-sm"
      >
        <ErrorMessage as="li" name="weight" />
        <ErrorMessage as="li" name="productLink" />
        <ErrorMessage as="li" name="price" />
      </ul>

      <div class="mt-6">
        <form class="flex flex-col space-y-6" @submit="onSubmit">
          <div class="flex items-center gap-x-3">
            <div class="space-y-1">
              <label
                for="price"
                class="text-telegram-hint flex gap-x-1 text-sm"
              >
                <p>Цена</p>
                <span class="text-failure">*</span>
              </label>
              <Field
                placeholder="€"
                name="price"
                id="price"
                pattern="[0-9]+"
                type="text"
                inputmode="numeric"
                class="bg-telegram-bg-secondary w-full rounded-lg p-3 font-medium outline-none"
              />
            </div>
            <div class="space-y-1">
              <label for="size" class="text-telegram-hint flex gap-x-1 text-sm">
                <p>Размер</p>
              </label>
              <Field
                name="size"
                id="size"
                class="bg-telegram-bg-secondary w-full rounded-lg p-3 font-medium outline-none"
                pattern="[0-9]+"
                type="text"
                inputmode="numeric"
              />
            </div>
            <div
              class="space-y-1"
              v-if="!cartRef?.categoryRef.categoryDefWeight"
            >
              <label
                for="weight"
                class="text-telegram-hint flex gap-x-1 text-sm"
              >
                <p>Вес</p>
                <span class="text-failure">*</span>
              </label>
              <Field
                placeholder="кг"
                name="weight"
                id="weight"
                class="bg-telegram-bg-secondary w-full rounded-lg p-3 font-medium outline-none"
              />
            </div>
          </div>
          <div class="space-y-3">
            <div class="space-y-1">
              <label for="link" class="text-telegram-hint flex gap-x-1 text-sm">
                <p>Ссылка на товар</p>
                <span class="text-failure">*</span>
              </label>
              <Field
                placeholder="https://farfetch.com/..."
                name="productLink"
                id="link"
                class="bg-telegram-bg-secondary w-full rounded-lg p-3 font-medium outline-none"
              />
            </div>
            <div
              class="space-y-2 text-sm"
              v-if="extraDeliveryPrice && extraDeliveryPrice > 0"
            >
              <p class="text-telegram-link">
                +340 ₽ за доставку с этого магазина на склад
              </p>
              <p class="text-telegram-hint">
                Доставка с некоторых магазинов в Испанию платная. Мы
                автоматически определяем стоимость доставки, и если она платная
                — добавляем её к общей стоимости заказа.
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="flex items-center gap-x-2 self-center rounded-lg bg-[#00FF00] px-2.5 py-2 font-medium uppercase text-[#fff]"
          >
            <IconsCheck />
            <span>Изменить</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

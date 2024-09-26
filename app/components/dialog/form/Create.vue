<script setup lang="ts">
import { storeItemSchema, type StoreItem } from '~/types/types'

const dialog = useDialogStore()

const cartStore = useCartStore()
const { shops, carts, categoryChoice } = storeToRefs(cartStore)

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: toTypedSchema(storeItemSchema),
  initialValues: {
    weight: categoryChoice.value?.categoryDefWeight,
  },
})

const link = useFieldValue<string>('productLink')
const extraDeliveryPrice = useFieldValue<number>('extraDeliveryPrice')

watchDebounced(
  link,
  () => {
    const userURL = new URL(link.value).hostname
    const shop = shops.value.find(
      (i) => new URL(i.shopLink).hostname === userURL,
    )

    if (shop) {
      setFieldValue('extraDeliveryPrice', shop.deliveryPrice)
      return
    } else {
      setFieldValue('extraDeliveryPrice', 0)
      return
    }
  },
  { debounce: 600 },
)

const onSubmit = handleSubmit((val) => {
  if (categoryChoice.value) {
    const storeCart: StoreItem = {
      ...val,
      itemId: carts.value.toString(),
      categoryRef: categoryChoice.value,
    }
    cartStore.addCart(storeCart)
    dialog.toggleOpenDialog()
  }
})
</script>

<template>
  <div class="bg-telegram-bg-primary text-telegram-text min-h-full px-5 py-6">
    <div class="flex flex-col items-center justify-center">
      <NuxtImg
        :src="urlFor(categoryChoice.categoryImg).url()"
        class="size-[92px]"
        v-if="categoryChoice?.categoryImg"
      />
      <div class="mt-5 flex items-center gap-x-2 text-2xl font-semibold">
        <h3>
          {{ categoryChoice?.singleName || categoryChoice?.categoryName }}
        </h3>

        <IconsPencil />
      </div>
      <ul class="text-telegram-hint mt-2 space-y-1 text-center text-sm">
        <li v-if="categoryChoice?.categoryDefWeight">
          Расчётный вес —
          {{ categoryChoice?.categoryDefWeight }}
          кг
        </li>
        <li>Комиссия за выкуп — 200 ₽</li>
      </ul>

      <DialogBannedItems
        v-if="
          categoryChoice?.categoryDefWeight == 0 ||
          !categoryChoice?.categoryDefWeight
        "
      />

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
              v-if="
                !categoryChoice?.categoryDefWeight ||
                categoryChoice.categoryDefWeight == 0
              "
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
          <Field
            class="space-y-3"
            as="div"
            name="productLink"
            v-slot="{ field }"
          >
            <div class="space-y-1">
              <label for="link" class="text-telegram-hint flex gap-x-1 text-sm">
                <p>Ссылка на товар</p>
                <span class="text-failure">*</span>
              </label>
              <input
                v-bind="field"
                placeholder="https://farfetch.com/..."
                id="link"
                class="bg-telegram-bg-secondary w-full rounded-lg p-3 font-medium outline-none"
              />
            </div>
            <div class="space-y-2 text-sm" v-if="extraDeliveryPrice">
              <p class="text-telegram-link">
                +340 ₽ за доставку с этого магазина на склад
              </p>
              <p class="text-telegram-hint">
                Доставка с некоторых магазинов в Испанию платная. Мы
                автоматически определяем стоимость доставки, и если она платная
                — добавляем её к общей стоимости заказа.
              </p>
            </div>
          </Field>
          <button
            type="submit"
            class="flex items-center gap-x-2 self-center rounded-lg bg-[#00FF00] px-2.5 py-2 font-medium uppercase text-[#fff]"
          >
            <IconsCheck />
            <span>Сохранить</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

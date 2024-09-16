<script lang="ts" setup>
const cartStore = useCartStore()

const { currencies, countries, countryChoice, methodChoice, currencyChoice } =
  storeToRefs(cartStore)
</script>

<template>
  <DialogWrapper>
    <StatusBar />
    <div class="bg-telegram-bg-secondary relative min-h-dvh w-full">
      <section class="bg-telegram-bg-primary px-5 py-6">
        <div class="space-y-5">
          <div class="space-y-3">
            <div class="flex items-center justify-between font-medium">
              <p>Валюта оплаты</p>

              <SelectRoot
                :model-value="currencyChoice?.currencyCode"
                @update:model-value="(val) => cartStore.setCurrencyChoice(val)"
              >
                <SelectTrigger
                  class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
                >
                  <SelectValue :aria-label="currencyChoice?.currencyCode">{{
                    currencyChoice?.currencyCode
                  }}</SelectValue>
                  <IconsArrow
                    class="stroke-telegram-hint transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent
                    :side-offset="-6"
                    position="popper"
                    class="bg-telegram-bg-secondary w-[156px] rounded-b-lg px-3 pb-3 pt-4"
                  >
                    <SelectViewport class="space-y-4 *:outline-none">
                      <SelectItem
                        class="cursor-pointer"
                        :value="c._id"
                        v-for="c in currencies.filter(
                          (i) => i._id !== currencyChoice?._id,
                        )"
                      >
                        <SelectItemText>{{ c.currencyCode }}</SelectItemText>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
            </div>

            <div class="flex items-center justify-between font-medium">
              <p>Страна доставки</p>
              <SelectRoot
                :model-value="countryChoice?.deliveryCountry"
                @update:model-value="(val) => cartStore.setCountryChoice(val)"
              >
                <SelectTrigger
                  class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
                >
                  <SelectValue :aria-label="countryChoice?.deliveryCountry">
                    {{ countryChoice?.deliveryCountry }}
                  </SelectValue>
                  <IconsArrow
                    class="stroke-telegram-hint transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </SelectTrigger>
                <SelectPortal>
                  <SelectContent
                    :side-offset="-6"
                    position="popper"
                    class="bg-telegram-bg-secondary w-[156px] rounded-b-lg px-3 pb-3 pt-4"
                  >
                    <SelectViewport class="space-y-4 *:outline-none">
                      <SelectItem
                        class="cursor-pointer"
                        :value="c._id"
                        v-for="c in countries?.filter(
                          (i) => i._id !== countryChoice?._id,
                        )"
                      >
                        <SelectItemText>{{ c.deliveryCountry }}</SelectItemText>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
            </div>
          </div>
          <div class="space-y-4">
            <p class="font-medium">Способ доставки</p>

            <div class="space-y-3">
              <div
                class="flex items-center gap-x-2"
                v-for="m in countryChoice?.deliveryMethods"
              >
                <CheckboxRoot
                  :checked="methodChoice?._key === m._key"
                  class="border-telegram-btn flex size-4 items-center justify-center rounded-full border-2"
                >
                  <CheckboxIndicator
                    class="bg-telegram-btn size-2 rounded-full"
                  />
                </CheckboxRoot>
                <span>{{ m.methodName }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ItemCarts />

      <DialogCreateDialogTrigger />
    </div>
    <div class="gap-x-5 flex items-center">
      <NuxtLink to="/">back</NuxtLink>
      <NuxtLink to="/result">next</NuxtLink>
    </div>
  </DialogWrapper>
</template>

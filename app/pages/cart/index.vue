<script lang="ts" setup>
const cartStore = useCartStore();

const {
  currencies,
  methodChoice,
  currencyChoice,
  country,
  methods,
  getRangeDiff,
} = storeToRefs(cartStore);

await callOnce(cartStore.initState);
</script>

<template>
  <DialogWrapper>
    <StatusBar />
    <div class="bg-telegram-bg-secondary relative min-h-screen w-full">
      <section class="bg-telegram-bg-primary px-5 py-6">
        <div class="space-y-5">
          <div class="space-y-3">
            <div class="flex items-center justify-between font-medium">
              <p>Валюта оплаты</p>

              <SelectRoot
                :model-value="currencyChoice?._id"
                @update:model-value="cartStore.setCurrency"
              >
                <SelectTrigger
                  class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
                >
                  <SelectValue>{{ currencyChoice?.currencyName }}</SelectValue>
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
                        v-for="c in currencies"
                      >
                        <SelectItemText>{{ c.currencyName }}</SelectItemText>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
            </div>

            <div class="flex items-center justify-between font-medium">
              <p>Страна доставки</p>
              <button
                class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
              >
                {{ country?.countryName }}
              </button>
            </div>
          </div>
          <div class="space-y-4">
            <p class="font-medium">Способ доставки</p>

            <RadioGroupRoot
              @update:model-value="cartStore.setMethod"
              class="space-y-3"
              :v-model="methodChoice?._key"
              :default-value="methodChoice?._key"
            >
              <div class="flex items-center gap-x-2" v-for="m in methods">
                <RadioGroupItem
                  :id="m._key"
                  :value="m._key"
                  class="border-telegram-btn flex size-4 items-center justify-center rounded-full border-2"
                >
                  <RadioGroupIndicator
                    class="bg-telegram-btn data-[state=checked]:animate-checkboxShow size-2 rounded-full"
                  />
                </RadioGroupItem>
                <div class="space-y-0.5">
                  <label :for="m._key">{{ m.methodName }}</label>
                  <p
                    class="text-telegram-hint text-sm"
                    v-if="m.hint && getRangeDiff"
                  >
                    <span class="pr-2"
                      >+{{ getRangeDiff }}
                      {{ currencyChoice?.currencySymbol }}</span
                    >
                    <span>({{ m.hint }})</span>
                  </p>
                </div>
              </div>
            </RadioGroupRoot>
          </div>
        </div>
      </section>

      <ItemCarts />

      <DialogCreateDialogTrigger />
    </div>
    <div class="flex items-center gap-x-5">
      <NuxtLink to="/">back</NuxtLink>
      <NuxtLink to="/result">next</NuxtLink>
    </div>
  </DialogWrapper>
</template>

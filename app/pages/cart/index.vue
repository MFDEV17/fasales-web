<script lang="ts" setup>
const { get } = useCountryData()
await get()
</script>

<template>
  <DialogLayout>
    <StatusBar />
    <div class="bg-telegram-bg-secondary relative min-h-dvh w-full">
      <section class="bg-telegram-bg-primary px-5 py-6">
        <div class="space-y-5">
          <div class="space-y-3">
            <div class="flex items-center justify-between font-medium">
              <p>Валюта оплаты</p>
              <SelectRoot>
                <SelectTrigger
                  class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
                >
                  <SelectValue placeholder="USDT" />
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
                      <SelectItem value="c1">
                        <SelectItemText>USDT</SelectItemText>
                      </SelectItem>
                      <SelectItem value="c2">
                        <SelectItemText>USDT</SelectItemText>
                      </SelectItem>
                    </SelectViewport>
                  </SelectContent>
                </SelectPortal>
              </SelectRoot>
            </div>

            <div class="flex items-center justify-between font-medium">
              <p>Страна доставки</p>
              <SelectRoot>
                <SelectTrigger
                  class="text-telegram-text bg-telegram-bg-secondary group inline-flex w-[156px] items-center justify-between rounded-lg p-3 outline-none"
                >
                  <SelectValue placeholder="Россия" />
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
                      <SelectItem value="c1">
                        <SelectItemText>USDT</SelectItemText>
                      </SelectItem>
                      <SelectItem value="c2">
                        <SelectItemText>USDT</SelectItemText>
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
              <div class="flex items-center gap-x-2">
                <CheckboxRoot
                  class="border-telegram-btn flex size-4 items-center justify-center rounded-full border-2"
                >
                  <CheckboxIndicator
                    class="bg-telegram-btn size-2 rounded-full"
                  />
                </CheckboxRoot>
                <span>Курьером на дом</span>
              </div>

              <div class="flex items-center gap-x-2">
                <CheckboxRoot
                  class="border-telegram-btn flex size-4 items-center justify-center rounded-full border-2"
                >
                  <CheckboxIndicator
                    class="bg-telegram-btn size-2 rounded-full"
                  />
                </CheckboxRoot>
                <span>Курьером на дом</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-2 px-3 pb-20 pt-4">
        <ItemCart v-for=" in Array.from({length: 10})" />
      </section>

      <DialogCreateTrigger />
    </div>
  </DialogLayout>
</template>

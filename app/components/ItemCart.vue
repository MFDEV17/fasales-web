<script setup lang="ts">
const dialog = useDialogStore();
</script>

<template>
  <DialogTrigger as-child>
    <div
      class="bg-telegram-bg-primary rounded-xl"
      @click="dialog.changeType('update')"
    >
      <div class="flex">
        <div class="self-center px-4">
          <NuxtImg src="sneaker.png" class="size-16" />
        </div>
        <div class="border-l-telegram-bg-secondary grow border-l py-3 pl-4">
          <p class="font-semibold">Кроссовки</p>
          <div class="py-2">
            <p class="text-2xl font-semibold">
              €39 <span class="text-telegram-hint">≈ 4000 ₽</span>
            </p>
            <p class="text-telegram-hint pt-0.5 text-sm font-medium">
              +340 ₽ доставка на склад
            </p>
            <p class="pt-2 font-medium">0.2 кг</p>
          </div>
          <div
            class="text-telegram-link flex items-center gap-x-1 text-sm italic"
          >
            <IconsLink />
            <NuxtLink to="https://google.com">farfetch.com ...</NuxtLink>
          </div>
        </div>
        <div class="flex shrink flex-col justify-between py-2.5 pr-2">
          <button
            class="bg-telegram-bg-secondary text-telegram-hint inline-flex size-8 items-center justify-center rounded-lg font-medium"
          >
            1
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
</template>

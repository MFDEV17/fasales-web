<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import type { Category } from "~/types/Category";

const dialog = useDialogStore();
const { dialogType, dialogStep } = storeToRefs(dialog);

const { data, isFinished } = useFetch<Category[]>(
  "http://localhost:3001/categories",
)
  .get()
  .json();
</script>

<template>
  <DialogRoot @update:open="dialog.resetDialog()">
    <slot />

    <DialogPortal>
      <DialogOverlay
        class="data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 z-30 bg-black/50"
      />
      <DialogContent
        class="text-telegram-link data-[state=open]:animate-contentShow bg-telegram-bg-secondary fixed left-[50%] top-[50%] z-[100] h-full max-h-[80dvh] w-[90vw] max-w-screen-md translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-2xl outline-none"
      >
        <DialogTitle
          class="bg-telegram-bg-primary sticky top-0 p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]"
        >
          <div class="flex items-center justify-between">
            <div @click="dialog.goPrevStep()">
              <IconsArrow
                class="stroke-telegram-btn size-[21px] rotate-90 cursor-pointer"
                :class="{ 'opacity-0': dialogType == 'update' }"
              />
            </div>
            <p class="text-telegram-hint font-medium">
              {{
                dialogType == "create"
                  ? "Создание товара"
                  : "Редактирование товара"
              }}
            </p>
            <DialogClose as-child>
              <div @click="dialog.resetDialog()">
                <IconsDialogClose />
              </div>
            </DialogClose>
          </div>
        </DialogTitle>

        <div
          class="text-telegram-text grid grid-cols-3 place-content-around gap-y-6 px-3 py-6"
          v-if="dialogStep == 1 && dialogType == 'create'"
          @click="dialog.goNextStep()"
        >
          <div
            class="flex cursor-pointer flex-col items-center space-y-2 text-sm font-medium"
            v-for="c in data"
            v-if="isFinished"
          >
            <div class="bg-telegram-bg-primary rounded-[24px] p-4">
              <NuxtImg :src="c.img" class="size-[60px]" />
            </div>
            <p class="overflow-hidden truncate">{{ c.name }}</p>
          </div>
        </div>

        <DialogItem v-if="dialogStep == 2 || dialogType == 'update'" />

        <div
          v-if="dialogType === 'create' && dialogStep == 1"
          class="text-telegram-hint bg-telegram-bg-primary fixed bottom-0 w-full p-4 text-center text-sm shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)]"
        >
          Выберите категорию товара
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

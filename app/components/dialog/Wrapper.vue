<script setup lang="ts">
const dialog = useDialogStore()
const { dialogType, dialogStep } = storeToRefs(dialog)
</script>

<template>
  <DialogRoot @update:open="dialog.resetDialog()">
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
                dialogType == 'create'
                  ? 'Создание товара'
                  : 'Редактирование товара'
              }}
            </p>
            <DialogClose as-child>
              <div @click="dialog.resetDialog()">
                <IconsDialogClose />
              </div>
            </DialogClose>
          </div>
        </DialogTitle>

        <DialogCategoryChoice
          v-if="dialogType === 'create' && dialogStep == 1"
        />

        <DialogFormCreate v-if="dialogType == 'create' && dialogStep == 2" />
        <DialogFormUpdate v-if="dialogType == 'update'" />
      </DialogContent>
    </DialogPortal>

    <slot />
  </DialogRoot>
</template>

<script setup lang="ts">
const dialog = useDialogStore()
</script>

<template>
  <DialogTrigger as-child>
    <button
      @click="dialog.changeType('create')"
      class="bg-telegram-btn fixed bottom-4 right-4 flex size-16 items-center justify-center rounded-full shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]"
    >
      <IconsPlus />
    </button>
  </DialogTrigger>
</template>

<script setup lang="ts">
import { DrawerTrigger } from "vaul-vue";

const dialog = useDialogStore();
</script>

<template>
  <DrawerTrigger as-child>
    <button
      @click="dialog.changeType('create')"
      class="bg-telegram-btn fixed bottom-4 right-4 flex size-16 items-center justify-center rounded-full shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)]"
    >
      <IconsPlus />
    </button>
  </DrawerTrigger>
</template>

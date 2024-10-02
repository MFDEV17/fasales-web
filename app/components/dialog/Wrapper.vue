<script setup lang="ts">
const dialog = useDialogStore();
const { dialogStep, dialogType, dialogOpen } = storeToRefs(dialog);
</script>

<template>
  <Drawer @update:open="dialog.resetDialog()" v-model:open="dialogOpen">
    <DrawerContent>
      <DialogCategoryChoice
        v-if="dialogStep === 1 && dialogType === 'create'"
      />
      <DialogFormCreate v-if="dialogStep === 2 && dialogType === 'create'" />
      <DialogFormUpdate v-if="dialogType === 'update'" />
    </DrawerContent>
    <slot />
  </Drawer>
</template>

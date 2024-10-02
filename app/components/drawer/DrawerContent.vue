<script lang="ts" setup>
import { DrawerContent, DrawerPortal } from "vaul-vue";
import type { DialogContentEmits, DialogContentProps } from "radix-vue";
import { useForwardPropsEmits } from "radix-vue";
import type { HtmlHTMLAttributes } from "vue";

const props = defineProps<
  DialogContentProps & { class?: HtmlHTMLAttributes["class"] }
>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded"
      class="bg-telegram-bg-secondary fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col rounded-t-[10px] border"
    >
      <div
        class="bg-telegram-link mx-auto mb-2 mt-2 h-1 w-[100px] rounded-full"
      />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>

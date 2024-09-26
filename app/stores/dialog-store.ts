import type { Category, StoreItem } from '~/types/types'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    dialogType: 'create' as 'create' | 'update',
    dialogStep: 1,
    dialogOpen: false,
    cartRef: null as StoreItem | null,
    categoryRef: null as Category | null,
  }),
  actions: {
    changeType(type: 'create' | 'update') {
      this.dialogType = type
    },
    goNextStep() {
      this.dialogStep++
    },
    goPrevStep() {
      if (this.dialogStep > 1) this.dialogStep--
    },
    resetDialog() {
      this.dialogStep = 1
    },
    toggleOpenDialog() {
      this.dialogOpen = !this.dialogOpen
    },
    setCartRef(cart: StoreItem) {
      this.cartRef = cart
    },
    resetCartRef() {
      this.cartRef = null
    },
    setCategoryRef(category: Category) {
      this.categoryRef = category
    },
    resetCategoryRef() {
      this.categoryRef = null
    },
  },
})

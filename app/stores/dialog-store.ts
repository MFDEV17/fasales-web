import type { Category } from '~/types/Category'

export const useDialogStore = defineStore('dialog', {
  state: () => {
    return {
      dialogType: 'create' as 'create' | 'update',
      dialogStep: 1,
      categoryRef: null as unknown as Category,
    }
  },
  actions: {
    changeType(type: 'create' | 'update') {
      this.dialogType = type
    },
    goNextStep() {
      this.dialogStep += 1
    },
    goPrevStep() {
      this.dialogStep -= 1
    },
    resetDialog() {
      this.dialogStep = 1
    },
    setCategoryRef(category: Category) {
      this.categoryRef = category
    },
    resetCategoryRef() {
      this.categoryRef = null as unknown as Category
    },
  },
})

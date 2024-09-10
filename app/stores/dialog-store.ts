export const useDialogStore = defineStore('dialog', {
  state: () => {
    return {
      dialogType: 'create' as 'create' | 'update',
      dialogStep: 1,
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
  },
})

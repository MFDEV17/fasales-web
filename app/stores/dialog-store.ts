import type { Category } from '~/types/Category'
import type { StoreItem } from '~/types/StoreItem'

export const useDialogStore = defineStore('dialog', () => {
  const dialogType = ref<'create' | 'update'>('create')
  const dialogStep = ref<number>(1)
  const categoryRef = ref<Category>()
  const cartRef = ref<StoreItem>()

  const changeType = (type: 'create' | 'update') => {
    dialogType.value = type
  }
  const goNextStep = () => {
    dialogStep.value += 1
  }
  const goPrevStep = () => {
    dialogStep.value -= 1
  }
  const resetDialog = () => {
    dialogStep.value = 1
  }
  const setCategoryRef = (category: Category) => {
    categoryRef.value = category
  }
  const setCartRef = (cart: StoreItem) => {
    cartRef.value = cart
  }
  const resetCategoryRef = () => {
    categoryRef.value
  }
  const resetCartRef = () => {}

  return {
    dialogType,
    dialogStep,
    cartRef,
    categoryRef,

    goNextStep,
    goPrevStep,
    resetDialog,
    setCategoryRef,
    resetCategoryRef,
    resetCartRef,
    setCartRef,
    changeType,
  }
})

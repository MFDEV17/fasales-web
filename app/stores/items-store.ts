import type { StoreItem } from '~/types/StoreItem'

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
      items: [] as StoreItem[],
    }
  },
  actions: {
    calculateOrder() {
      const sum = this.items.reduce((prev, current) => prev + current.price, 0)
      const weight = this.items.reduce(
        (prev, current) => prev + current.weight,
        0,
      )

      return {
        orderSum: sum,
        orderWeight: weight,
      }
    },
    addItem(item: StoreItem) {
      this.items.push(item)
    },
    removeItem(id: string) {
      const index = this.items.findIndex((i) => i.itemId === id)
      if (index >= 0) this.items.splice(index, 1)
    },
    editItem() {},
  },
})

import type {
  DeliveryMethod,
  DeliveryCountry,
  Currency,
  Category,
  DefaultResponse,
  StoreItem,
  Shop,
  BannedItem,
} from '~/types/types'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    methodChoice: null as DeliveryMethod | null,
    currencyChoice: null as Currency | null,
    categoryChoice: null as Category | null,
    carts: [] as StoreItem[],
    bannedItems: [] as BannedItem[],

    methods: null as { [key: string]: DeliveryMethod } | null,
    currencies: null as { [key: string]: Currency } | null,
    country: null as DeliveryCountry | null,
    categories: [] as Category[],
    shops: [] as Shop[],
  }),

  getters: {
    generateShopList() {
      const shopList = new Map<string, StoreItem[]>()

      this.carts.forEach((c) => {
        const hostname = new URL(c.productLink).hostname.replace('www.', '')
        if (shopList.has(hostname)) shopList.get(hostname)?.push(c)
        else shopList.set(hostname, [c])
      })

      return shopList
    },
  },

  actions: {
    setMethod(methodKey: string) {
      for (const i in this.methods) {
        const method = this.methods[i]
        if (method._key == methodKey) this.methodChoice = method
      }
    },

    setCategory(category: Category) {
      this.categoryChoice = category
    },

    setCurrency(currencyId: string) {
      for (const i in this.currencies) {
        const currency = this.currencies[i]
        if (currency._id === currencyId) this.currencyChoice = currency
      }
    },

    addCart(cart: StoreItem) {
      this.carts.push(cart)
    },

    removeCart(cartId: string) {
      const cartIndex = this.carts.findIndex((c) => c.itemId === cartId)
      if (cartIndex >= 0) {
        this.carts.splice(cartIndex, 1)
      }
    },

    editCart(cartId: string, propsToChange: Partial<StoreItem>) {
      const cartIndex = this.carts.findIndex((i) => i.itemId === cartId)
      if (cartIndex >= 0) {
        this.carts[cartIndex] = { ...this.carts[cartIndex], ...propsToChange }
      }
    },

    incermentCartCount(cartId: string) {
      const cartToIncrement = this.carts.find((c) => c.itemId === cartId)
      if (cartToIncrement) {
        cartToIncrement.count++
      }
    },

    decermentCartCount(cartId: string) {
      const cartToDecrement = this.carts.find((c) => c.itemId === cartId)
      if (cartToDecrement && cartToDecrement.count > 1) {
        cartToDecrement.count--
      }
    },

    async initState() {
      const query = groq`
        {
          'deliveryCountry': *[_type == 'countries'][0]{ 'countryName': deliveryCountry },
          'deliveryMethods': *[_type == 'countries'][0] {
            'mail': deliveryMethods[][0],
            'courier': deliveryMethods[][1]
          },
          'currencies': {
            'usdt': *[_type == 'currency'][0],
            'rub': *[_type == 'currency'][1]
          },
          'categories': *[_type == 'categories']{ _id, categoryName, categoryDefWeight, singleName, categoryImg },
          'shops': *[_type == 'shops']{ _id, shopName, deliveryPrice, freeDeliveryWeight, specialCommission, shopLink },
          'bannedItems': *[_type == 'bannedCategories']{_id, bannedCategory}
        }
      `
      const { data } = await useSanityQuery<DefaultResponse>(query)

      if (data.value) {
        const {
          deliveryMethods,
          currencies,
          shops,
          deliveryCountry,
          categories,
          bannedItems,
        } = data.value

        this.methods = deliveryMethods
        this.currencies = currencies
        this.shops = shops
        this.categories = categories
        this.bannedItems = bannedItems

        this.country = deliveryCountry
        this.methodChoice = this.methods['mail']
        this.currencyChoice = this.currencies['rub']
      }
    },
  },
})

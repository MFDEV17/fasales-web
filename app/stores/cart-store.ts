import type { Currency } from '~/types/DefaultResponse'
import type { DeliveryCountry, DeliveryMethod } from '~/types/DeliveryCountry'
import type { StoreItem } from '~/types/StoreItem'

export const useCartStore = defineStore('carts', () => {
  const currencyChoice = ref<Currency | null>(null)
  const countryChoice = ref<DeliveryCountry | null>(null)
  const methodChoice = ref<DeliveryMethod | null>(null)
  const storeCarts = ref<StoreItem[]>([])

  const countries = ref<DeliveryCountry[]>([])
  const methods = ref<DeliveryMethod[]>([])
  const currencies = ref<Currency[]>([])

  const addItem = (storeItem: StoreItem): void => {
    storeCarts.value.push(storeItem)
  }

  const editItem = (itemId: string, fieldsToUpdate: Partial<StoreItem>) => {
    const itemIndex = storeCarts.value.findIndex((c) => c.itemId === itemId)
    if (itemIndex >= 0) {
      storeCarts.value[itemIndex] = {
        ...storeCarts.value[itemIndex],
        ...fieldsToUpdate,
      }
    }
  }

  const removeItem = (itemId: string): void => {
    const itemIndex = storeCarts.value.findIndex((i) => i.itemId == itemId)
    if (itemIndex >= 0) storeCarts.value.splice(itemIndex, 1)
  }

  const incrementCount = (itemId: string): void => {
    const item = storeCarts.value.find((i) => i.itemId === itemId)
    if (item) item.count += 1
  }

  const decrementCount = (itemId: string): void => {
    const item = storeCarts.value.find((i) => i.itemId === itemId)
    if (item) item.count -= 1
  }

  const setCurrencies = (currencyList: Currency[]): void => {
    currencies.value = currencyList
  }

  const setMethods = (methodList: DeliveryMethod[]): void => {
    methods.value = methodList
  }

  const setCountries = (countriesList: DeliveryCountry[]): void => {
    countries.value = countriesList
  }

  const setCurrencyChoice = (currency: Currency): void => {
    currencyChoice.value = currency
  }

  const setCountryChoice = (country: DeliveryCountry): void => {
    countryChoice.value = country
  }

  const setMethodChoice = (method: DeliveryMethod): void => {
    methodChoice.value = method
  }

  const calculateResult = () => {
    let itemsPriceSumEuro = 0
    let itemsPriceSumUserCurrency
    let itemWeightSum = 0

    for (const prod of storeCarts.value) {
      itemsPriceSumEuro += prod.price

      if (prod.weight) {
        itemWeightSum += prod.weight
      }
    }

    if (currencyChoice.value) {
      itemsPriceSumUserCurrency =
        itemsPriceSumEuro * currencyChoice.value.amountToEuro
    }

    return {
      itemsPriceSumEuro,
      itemWeightSum,
    }
  }

  return {
    setCountryChoice,
    setCurrencyChoice,
    setMethodChoice,
    setCurrencies,
    setMethods,
    setCountries,
    removeItem,
    addItem,
    incrementCount,
    decrementCount,
    calculateResult,
    editItem,

    currencyChoice,
    countryChoice,
    methodChoice,
    currencies,
    countries,
    storeCarts,
  }
})

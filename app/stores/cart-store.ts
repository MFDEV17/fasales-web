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
    if (itemIndex >= 0) {
      storeCarts.value.splice(itemIndex, 1)
    }
  }

  const incrementCount = (itemId: string): void => {
    const item = storeCarts.value.find((i) => i.itemId === itemId)
    if (item) item.count += 1
  }

  const decrementCount = (itemId: string): void => {
    const item = storeCarts.value.find((i) => i.itemId === itemId)
    if (item && item.count > 1) {
      item.count -= 1
    }
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

  const setCurrencyChoice = (currencyId: string): void => {
    const currency = currencies.value.find((c) => c._id == currencyId)

    if (currency) {
      currencyChoice.value = currency
    }
  }

  const setCountryChoice = (countryId: string) => {
    const country = countries.value.find((c) => c._id == countryId)

    // ⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
    // ⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
    // ⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
    // ⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
    // ⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
    // ⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
    // ⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
    // ⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
    // ⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
    // ⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
    // ⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
    // ⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
    // ⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
    // ⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
    // ⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
    // ⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    // ⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
    // ⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
    // ⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
    // ⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
    // I HATE TYPESCRIPT I HATE TYPESCRIPT I HATE TYPESCRIPT

    if (country) {
      const sameMethodIndex = country.deliveryMethods?.findIndex(
        (m) => m.methodName == methodChoice.value?.methodName,
      )

      if (
        sameMethodIndex != undefined &&
        country.deliveryMethods &&
        country.deliveryMethods[sameMethodIndex]
      ) {
        countryChoice.value = country
        methodChoice.value = country.deliveryMethods[sameMethodIndex]
      } else {
        countryChoice.value = country

        if (
          country.deliveryMethods &&
          country.deliveryMethods[0] !== undefined
        ) {
          methodChoice.value = country.deliveryMethods[0]
        }
      }
    }
  }

  const setMethodChoice = (methodKey: string) => {
    if (countryChoice.value?.deliveryMethods) {
      const method = countryChoice.value?.deliveryMethods.find(
        (m) => m._key == methodKey,
      )
      if (method) {
        methodChoice.value = method
      }
    }
  }

  const calculateResult = computed(() => {
    let itemsPriceSumEuro = 0
    let itemsPriceSumUserCurrency = 0
    let itemWeightSum = 0
    let deliveryPrice = 0

    for (const prod of storeCarts.value) {
      itemsPriceSumEuro += prod.price * prod.count

      if (prod.weight) {
        itemWeightSum += prod.weight
      }
    }

    if (currencyChoice.value) {
      itemsPriceSumUserCurrency =
        itemsPriceSumEuro * currencyChoice.value.amountToEuro
    }

    if (methodChoice.value?.priceRange) {
      for (const range of methodChoice.value?.priceRange) {
        for (const m of range.rangeList) {
          if (itemWeightSum >= m.from && itemWeightSum <= m.to) {
            deliveryPrice = m.deliveryPrice
          }
        }
      }
    }

    const deliveryTime = methodChoice.value?.deliveryTime

    const deliveryPriceCurrencyChoice =
      deliveryPrice * (currencyChoice.value?.amountToEuro || 1)

    const finalSumPrice =
      deliveryPriceCurrencyChoice + itemsPriceSumUserCurrency

    return {
      finalSumPrice,
      itemsPriceSumUserCurrency,
      itemsPriceSumEuro,
      itemWeightSum,
      deliveryTime,
      deliveryPrice,
      currencyChoice,
      deliveryPriceCurrencyChoice,
    }
  })

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
    editItem,

    calculateResult,
    currencyChoice,
    countryChoice,
    methodChoice,
    currencies,
    countries,
    storeCarts,
  }
})

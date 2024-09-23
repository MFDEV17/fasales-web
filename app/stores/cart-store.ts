import {
  type DeliveryMethod,
  type DeliveryCountry,
  type DeliveryMethods,
  type Currency,
} from '~/types/DefaultResponse'

export const useCartStore = defineStore('carts', () => {
  const country = ref<DeliveryCountry>()
  const methods = ref<DeliveryMethods>()
  const currencies = ref<{ [key: string]: Currency }>()

  const currencyChoice = ref<Currency>()
  const methodChoice = ref<DeliveryMethod>()

  const initMethods = (methodsData: DeliveryMethods) => {
    methods.value = methodsData
  }

  const initCurrencies = (currencyData: { [key: string]: Currency }) => {
    currencies.value = currencyData
  }

  const setMethod = (method: DeliveryMethod) => {
    methodChoice.value = method
  }

  const setCurrency = (currency: Currency) => {
    currencyChoice.value = currency
  }

  const setCountry = (countryData: DeliveryCountry) => {
    country.value = countryData
  }

  return {
    country,
    methods,
    currencies,
    currencyChoice,
    methodChoice,

    setMethod,
    setCurrency,
    setCountry,

    initMethods,
    initCurrencies,
  }
})

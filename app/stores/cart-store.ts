import type { Currency } from '~/types/DefaultResponse'
import type { DeliveryCountry, DeliveryMethod } from '~/types/DeliveryCountry'

export const useCartStore = defineStore('carts', () => {
  const currencyChoice = ref<Currency | null>(null)
  const countryChoice = ref<DeliveryCountry | null>(null)
  const methodChoice = ref<DeliveryMethod | null>(null)

  const countries = ref<DeliveryCountry[] | null>(null)
  const methods = ref<DeliveryMethod[] | null>(null)
  const currencies = ref<Currency[]>()

  const setCurrencies = (currencyList: Currency[]) => {
    currencies.value = currencyList
  }

  const setMethods = (methodList: DeliveryMethod[]) => {
    methods.value = methodList
  }

  const setCountries = (countriesList: DeliveryCountry[]) => {
    countries.value = countriesList
  }

  const setCurrencyChoice = (currency: Currency) => {
    currencyChoice.value = currency
  }

  const setCountryChoice = (country: DeliveryCountry) => {
    countryChoice.value = country
  }

  const setMethodChoice = (method: DeliveryMethod) => {
    methodChoice.value = method
  }

  return {
    setCountryChoice,
    setCurrencyChoice,
    setMethodChoice,
    setCurrencies,
    setMethods,
    setCountries,

    currencyChoice,
    countryChoice,
    methodChoice,
    currencies,
    countries,
  }
})

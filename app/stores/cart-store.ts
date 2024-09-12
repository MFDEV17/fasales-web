import type { Currency } from '~/types/DefaultResponse'
import type { DeliveryCountry, DeliveryMethod } from '~/types/DeliveryCountry'

export const useCartStore = defineStore('asdf', () => {
  const currencies = ref<Currency[]>()

  const currencyChoice = ref<Currency | null>(null)
  const countryChoice = ref<DeliveryCountry | null>(null)
  const methodChoice = ref<DeliveryMethod | null>(null)

  const setCurrencies = (currencyList: Currency[]) => {
    currencies.value = currencyList
  }

  const setCurrency = (currency: Currency) => {
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
    setCurrency,
    setMethodChoice,
    setCurrencies,

    currencyChoice,
    countryChoice,
    methodChoice,
    currencies,
  }
})

import type { DefaultResponse } from '~/types/DefaultResponse'

export default function useInitData() {
  const store = useCartStore()
  const { currencies, countries } = storeToRefs(store)

  const get = async () => {
    if (currencies.value.length == 0 && countries.value.length == 0) {
      const query = groq`
      {
        'currencies': *[_type == 'currency'],
        'countries': *[_type == 'countries']
      }
    `
      const { data } = await useSanityQuery<DefaultResponse>(query)

      if (data.value) {
        const firstCountry = data.value.countries[0]

        store.setCountries(data.value.countries)
        store.setMethods(firstCountry.deliveryMethods)
        store.setCurrencies(data.value.currencies)

        store.setCountryChoice(firstCountry._id)
        store.setMethodChoice(firstCountry.deliveryMethods[0]._key)
        store.setCurrencyChoice(data.value.currencies[0]._id)
      }
    }
  }

  return { get }
}

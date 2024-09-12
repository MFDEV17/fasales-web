import type { DefaultResponse } from '~/types/DefaultResponse'

export default function useCountryData() {
  const store = useCartStore()

  const get = async () => {
    const query = groq`
      {
        'currencies': *[_type == 'currency'],
        'countries': *[_type == 'countries']
      }
    `
    const { data } = await useSanityQuery<DefaultResponse>(query)

    if (data.value) {
      const firstCountry = data.value.countries[0]

      store.setCountryChoice(firstCountry)
      store.setMethodChoice(firstCountry.deliveryMethods[0])
      store.setCurrency(data.value.currencies[0])
    }
  }

  return { get }
}

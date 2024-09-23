import type { DefaultResponse } from '~/types/DefaultResponse'

export default function useInitData() {
  const store = useCartStore()

  const get = async () => {
    const query = groq`
        {
          'deliveryCountry': *[_type == 'countries'][0]{'countryName': deliveryCountry},
          'deliveryMethods': *[_type == 'countries'][0] {
            'mail': deliveryMethods[][0],
            'courier': deliveryMethods[][1]
          },
          'currencies': {
            'usdt': *[_type == 'currency'][0],
            'rub': *[_type == 'currency'][1]
          }
        }
    `
    const { data } = await useSanityQuery<DefaultResponse>(query)

    if (data.value) {
      store.initCurrencies(data.value.currencies)
      store.initMethods(data.value.deliveryMethods)

      store.setMethod(data.value.deliveryMethods.mail)
      store.setCurrency(data.value.currencies.usdt)
      store.setCountry(data.value.deliveryCountry)
    }
  }

  return { get }
}

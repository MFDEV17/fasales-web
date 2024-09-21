import type { Currency } from './Currency'
import type { DeliveryCountry } from './DeliveryCountry'
import type { Shop } from './Shop'

export interface DefaultResponse {
  currencies: Currency[]
  countries: DeliveryCountry[]
  shops: Shop[]
}

export type DefaultResponse = {
  deliveryCountry: DeliveryCountry
  deliveryMethods: DeliveryMethods
  currencies: { [key: string]: Currency }
}

export type Currency = {
  currencySymbol: string
  _id: string
  currencyName: string
  amountToEuro: number
}

export type DeliveryCountry = {
  countryName: string
}

export type DeliveryMethods = {
  mail: DeliveryMethod
  courier: DeliveryMethod
}

export type DeliveryMethod = {
  methodName: string
  _key: string
  priceRange: PriceRange
  deliveryTime: number
  hint: string
}

export type PriceRange = {
  rangeList: RangeList[]
}

export type RangeList = {
  deliveryPrice: number
  to: number
  _key: string
  from: number
}

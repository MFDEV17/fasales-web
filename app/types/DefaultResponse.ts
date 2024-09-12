export interface DefaultResponse {
  currencies: Currency[]
  countries: Country[]
}

export interface Country {
  deliveryMethods: DeliveryMethod[]
  _updatedAt: Date
  _createdAt: Date
  deliveryCountry: string
  _rev: string
  _type: string
  _id: string
}

export interface DeliveryMethod {
  deliveryTime: number
  _type: string
  methodName: string
  _key: string
  priceRange: PriceRange[]
}

export interface PriceRange {
  rangeList: RangeList[]
  _type: string
  _key: string
}

export interface RangeList {
  deliveryPrice: number
  to: number
  _key: string
  _type: string
  from: number
}

export interface Currency {
  _id: string
  _updatedAt: Date
  currencyCode: string
  currencyName: string
  _createdAt: Date
  amountToEuro: number
  _rev: string
  _type: string
}

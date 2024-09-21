export interface DeliveryCountry {
  _id: string
  deliveryCountry: string
  deliveryMethods: [DeliveryMethod, DeliveryMethod]
}

export interface DeliveryMethod {
  _key: string
  deliveryTime: number
  methodName: string
  hint?: string
  priceRange: PriceRange
}

export interface PriceRange {
  rangeList: RangeList[]
}

export interface RangeList {
  _key: string
  deliveryPrice: number
  from: number
  to: number
}

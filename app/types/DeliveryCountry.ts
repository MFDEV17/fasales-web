export interface DeliveryCountry {
  _id: string
  deliveryCountry: string
  deliveryMethods?: DeliveryMethod[]
}

export interface DeliveryMethod {
  _key: string
  deliveryTime: number
  methodName: string
  priceRange: PriceRange[]
}

interface PriceRange {
  _key: string
  rangeList: RangeList[]
}

interface RangeList {
  _key: string
  _type: string
  deliveryPrice: number
  from: number
  to: number
}

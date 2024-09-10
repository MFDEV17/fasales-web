export interface DeliveryMethod {
  _id: string
  methodName: string
  priceRange: PriceRange[]
}

interface PriceRange {
  country: Country
  rangeList: RangeList[]
}

interface Country {
  _id: string
  deliveryCountry: string
}

interface RangeList {
  from: number
  to: number
  _key: string
}

import type { ImageAsset } from "@sanity/types";
import { number, object, string, type InferType } from "yup";

export type BannedItem = {
  _id: string;
  bannedCategory: string;
};

export type DefaultResponse = {
  deliveryCountry: DeliveryCountry;
  deliveryMethods: { [key: string]: DeliveryMethod };
  currencies: { [key: string]: Currency };
  categories: Category[];
  shops: Shop[];
  bannedItems: BannedItem[];
};

export type Shop = {
  _id: string;
  shopName: string;
  deliveryPrice: number;
  freeDeliveryWeight: number;
  specialCommission: boolean;
  shopLink: URL;
};

export const storeItemSchema = object({
  price: number()
    .required("Некорректная цена")
    .max(50000, "Некорректная цена")
    .positive(),
  weight: number()
    .required("Вес должен быть в пределах 0.1-100 кг")
    .positive("Вес должен быть в пределах 0.1-100 кг")
    .min(0.1, "Вес должен быть в пределах 0.1-100 кг")
    .max(100, "Вес должен быть в пределах 0.1-100 кг"),
  size: string().optional(),
  productLink: string()
    .url("Некорректная ссылка")
    .required("Некорректная ссылка"),
  count: number().default(1),
  extraDeliveryPrice: number().optional(),
});

export type StoreItem = {
  shopRef?: Shop;
  categoryRef: Category;
  itemId: string;
} & InferType<typeof storeItemSchema>;

export type Category = {
  _id: string;
  categoryName: string;
  singleName: string;
  categoryImg: ImageAsset;
  categoryDefWeight?: number;
};

export type Currency = {
  currencySymbol: string;
  _id: string;
  currencyName: string;
  amountToEuro: number;
  buyCommission: number;
};

export type DeliveryCountry = {
  countryName: string;
};

export type DeliveryMethods = {
  methods: { [key: string]: DeliveryMethod };
};

export type DeliveryMethod = {
  methodName: string;
  _key: string;
  priceRange: PriceRange;
  deliveryTime: number;
  hint: string;
};

export type PriceRange = {
  rangeList: RangeList[];
};

export type RangeList = {
  deliveryPrice: number;
  to: number;
  _key: string;
  from: number;
};

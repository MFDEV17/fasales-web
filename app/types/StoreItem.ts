import { number, object, string, type InferType } from 'yup'
import type { Category } from './Category'

export const storeItemSchema = object({
  price: number()
    .required('Некорректная цена')
    .max(50000, 'Некорректная цена')
    .positive(),
  weight: number()
    .required('Вес должен быть в пределах 0.1-100 кг')
    .positive('Вес должен быть в пределах 0.1-100 кг')
    .min(0.1, 'Вес должен быть в пределах 0.1-100 кг')
    .max(100, 'Вес должен быть в пределах 0.1-100 кг'),
  size: string().optional(),
  productLink: string()
    .url('Некорректная ссылка')
    .required('Некорректная ссылка'),
  count: number().default(1),
  extraDeliveryPrice: number().optional(),
})

export type StoreItem = {
  shopRef?: string
  categoryRef: Category
  itemId: string
} & InferType<typeof storeItemSchema>

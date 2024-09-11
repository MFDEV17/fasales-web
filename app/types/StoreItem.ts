import { number, object, string, type InferType } from 'yup'
import type { Category } from './Category'

export const storeItemSchema = object({
  price: number().required().max(100, 'Некорректная цена').positive(),
  weight: number()
    .optional()
    .positive()
    .min(0.1, 'Вес должен быть в пределах 0.1-100 кг')
    .max(100, 'Вес должен быть в пределах 0.1-100 кг'),
  size: string().optional(),
  productLink: string()
    .url('Некорректная ссылка')
    .required('Некорректная ссылка'),
})

export type StoreItem = { categoryRef: Category; itemId: string } & InferType<
  typeof storeItemSchema
>

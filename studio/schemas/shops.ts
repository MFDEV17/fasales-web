import {defineField, defineType} from 'sanity'

export const shop = defineType({
  title: 'Магазины',
  type: 'document',
  name: 'shops',
  fields: [
    defineField({
      title: 'Наименование магазина',
      type: 'string',
      name: 'shopName',
    }),
    defineField({
      title: 'Ссылка на магазин',
      type: 'url',
      name: 'shopLink',
    }),
    defineField({
      title: 'Стоимость доставки',
      type: 'number',
      name: 'deliveryPrice',
    }),
    defineField({
      title: 'Пониженная комиссия',
      type: 'boolean',
      name: 'specialCommission',
      initialValue: false,
    }),
    defineField({
      title: 'Размер пониженной комиссии',
      type: 'number',
      name: 'specialCommissionAmount',
    }),
  ],
})

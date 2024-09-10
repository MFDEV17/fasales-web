import {defineField, defineType} from 'sanity'

export const deliveryMethods = defineType({
  title: 'Методы доставки',
  name: 'deliveryMethods',
  type: 'document',
  fields: [
    defineField({
      title: 'Наименоваение метода',
      type: 'string',
      name: 'methodName',
    }),
    defineField({
      title: 'Время доставки (в днях)',
      type: 'number',
      name: 'deliveryTime',
    }),
    defineField({
      title: 'Диапазон веса и цена доставки',
      name: 'priceRange',
      type: 'array',
      of: [
        defineField({
          type: 'document',
          name: 'range',

          fields: [
            defineField({
              title: 'Страна',
              type: 'string',
              name: 'countryName',
            }),
            defineField({
              name: 'country',
              title: 'Страна доставки',
              type: 'reference',
              to: [{type: 'countries'}],
            }),
            defineField({
              name: 'rangeList',
              title: 'Диапазоны',
              type: 'array',
              of: [
                defineField({
                  type: 'document',
                  name: 'range',
                  fields: [
                    defineField({type: 'number', name: 'from', title: 'От'}),
                    defineField({type: 'number', name: 'to', title: 'До'}),
                    defineField({
                      type: 'number',
                      name: 'deliveryPrice',
                      title: 'Цена доставки в евро',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})

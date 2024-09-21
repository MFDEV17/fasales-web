import {defineField, defineType} from 'sanity'

export const deliveryMethod = defineType({
  title: 'Методы доставки',
  name: 'deliveryMethod',
  type: 'object',
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
      title: 'Подсказка',
      type: 'string',
      name: 'hint',
    }),
    defineField({
      title: 'Диапазон веса и цена доставки',
      name: 'priceRange',
      type: 'object',
      fields: [
        defineField({
          name: 'rangeList',
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
})

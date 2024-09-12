import {defineField, defineType} from 'sanity'

export const deliveryCountry = defineType({
  title: 'Страны доставки',
  type: 'document',
  name: 'countries',
  fields: [
    defineField({
      title: 'Наименование страны',
      type: 'string',
      name: 'deliveryCountry',
    }),
    defineField({
      title: 'Методы доставки',
      name: 'deliveryMethods',
      type: 'array',
      of: [{type: 'deliveryMethod'}],
    }),
  ],
})

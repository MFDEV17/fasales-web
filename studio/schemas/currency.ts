import {defineField, defineType} from 'sanity'

export const currency = defineType({
  title: 'Валюта',
  name: 'currency',
  type: 'document',
  fields: [
    defineField({
      title: 'Наименование валюты',
      name: 'currencyName',
      type: 'string',
    }),
    defineField({
      title: 'Код валюты',
      name: 'currencyCode',
      type: 'string',
    }),
    defineField({
      title: 'Курс по отношению к евро',
      name: 'amountToEuro',
      type: 'number',
    }),
  ],
})

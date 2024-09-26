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
      title: 'Символ валюты',
      name: 'currencySymbol',
      type: 'string',
    }),
    defineField({
      title: 'Курс по отношению к евро',
      name: 'amountToEuro',
      type: 'number',
    }),
    defineField({
      title: 'Комиссия за выкуп в валюте',
      name: 'buyCommission',
      type: 'number',
    }),
  ],
})

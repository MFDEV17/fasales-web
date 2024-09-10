import {defineField, defineType} from 'sanity'

export const redemptionFee = defineType({
  title: 'Комиссия за выкуп',
  type: 'document',
  name: 'redemptionFee',
  fields: [
    defineField({
      name: 'currencyName',
      title: 'Наименование валюты',
      type: 'string',
    }),
    defineField({
      name: 'currencyRef',
      title: 'Валюта',
      type: 'reference',
      to: [{type: 'currency'}],
    }),
    defineField({
      name: 'feeAmount',
      title: 'Комиссия',
      type: 'number',
    }),
  ],
})

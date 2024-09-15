import {defineField, defineType} from 'sanity'

export const bannedCategories = defineType({
  type: 'document',
  title: 'Запрещенные товары',
  name: 'bannedCategories',
  fields: [defineField({title: 'Наименование категории', name: 'bannedCategory', type: 'string'})],
})

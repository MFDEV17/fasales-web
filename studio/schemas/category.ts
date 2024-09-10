import {defineField, defineType} from 'sanity'

export const category = defineType({
  title: 'Категории',
  type: 'document',
  name: 'categories',
  fields: [
    defineField({
      title: 'Наименование категории',
      name: 'categoryName',
      type: 'string',
    }),
    defineField({
      title: 'Наименование категории в ед. числе',
      name: 'singleName',
      type: 'string',
    }),
    defineField({
      title: 'Изображение категории',
      name: 'categoryImg',
      type: 'image',
    }),
    defineField({
      title: 'Расчетный вес (кг)',
      name: 'categoryDefWeight',
      type: 'number',
    }),
  ],
})

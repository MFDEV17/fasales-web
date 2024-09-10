import {defineField, defineType} from 'sanity'

export const managers = defineType({
  title: 'Менеджеры',
  type: 'document',
  name: 'managers',
  fields: [
    defineField({
      title: 'Ссылка на аккаунт',
      type: 'url',
      name: 'managerUrl',
    }),
  ],
})

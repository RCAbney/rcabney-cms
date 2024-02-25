import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'educationItem',
  title: 'Education Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'datesAttended',
      title: 'Dates Attended',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resumeItem',
  title: 'Resume Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'datesWorked',
      title: 'Dates Worked',
      type: 'string',
    }),
    defineField({
      name: 'jobDescription',
      title: 'Job Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'summary',
        title: 'Summary',
        type: 'blockContent',
      }),
      defineField({
        name: 'technicalSkills',
        title: 'Technical Skills',
        type: 'array',
        of: [{type: 'reference', to: {type: 'jobSkills'}}],
      }),
      defineField({
        name: 'experience',
        title: 'Experience',
        type: 'array',
        of: [{type: 'reference', to: {type: 'resumeItem'}}],
      }),
      defineField({
        name: 'education',
        title: 'Education',
        type: 'array',
        of: [{type: 'reference', to: {type: 'educationItem'}}],
      }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

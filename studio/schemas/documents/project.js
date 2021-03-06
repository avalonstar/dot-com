import { RiComputerLine } from 'react-icons/ri'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RiComputerLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      description: 'Is this project featured?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      title: 'date',
      type: 'date',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'reference',
      to: [{ type: 'position' }],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'portableText',
    },
    {
      name: 'involvement',
      title: 'Involvement',
      type: 'portableText',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'announcementUrl',
      title: 'Announcement URL',
      type: 'url',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    },
    {
      name: 'isActive',
      title: 'Active Project?',
      type: 'boolean',
      description: 'Is this version of the project still live?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
}

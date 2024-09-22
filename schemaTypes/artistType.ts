import {defineField, defineType} from 'sanity'

export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'bio',
            type: 'text',
            title: 'Biography',
        }),
        defineField({
            name: 'birthdate',
            type: 'date',
            title: 'Birthdate',
        }),
        defineField({
            name: 'website',
            type: 'url',
            title: 'Website',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
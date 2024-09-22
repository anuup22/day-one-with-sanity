import {defineField, defineType} from 'sanity'

export const venueType = defineType({
    name: 'venue',
    title: 'Venue',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'location',
            type: 'geopoint',
            title: 'Location',
        }),
        defineField({
            name: 'capacity',
            type: 'number',
            title: 'Capacity',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
    ],
})
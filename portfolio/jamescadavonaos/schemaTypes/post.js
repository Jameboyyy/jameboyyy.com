export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Azure', value: 'azure' },
                    { title: 'DevOps', value: 'devops' },
                    { title: 'Projects', value: 'projects' },
                    { title: 'Career', value: 'career' },
                ],
            },
        },
        {
            name: 'subcategory',
            title: 'Subcategory',
            type: 'string',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
}
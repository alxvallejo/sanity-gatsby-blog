export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4c43ea920174789970dda0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-euv5j72w',
                  apiId: '93196c00-e87d-4aa7-82ff-9f9c2dbc33a0'
                },
                {
                  buildHookId: '5e4c43eb71441987c1a3906b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q66rz1u8',
                  apiId: '324b9f75-df5b-4306-8f18-07a8965ced7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alxvallejo/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q66rz1u8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

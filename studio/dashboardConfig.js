export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '611b18c458b584a3bec0e649',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-eh6tpixn',
                  apiId: 'e53c4abf-364c-45da-9b71-f2837e6ac32d'
                },
                {
                  buildHookId: '611b18c406d07275280cec00',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-maieo4xu',
                  apiId: 'ede9f34f-d431-4dfd-9c73-132128f2c237'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AbreuOliver/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-maieo4xu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

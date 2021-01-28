export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60126d542013829d05785132',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fxg3czqe',
                  apiId: '6037f655-3128-4178-9fbd-3be92c5061c3'
                },
                {
                  buildHookId: '60126d54118a519a7b79cb35',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2fnk9dpc',
                  apiId: '8021eec6-bf18-418c-84e5-34161469a7db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pavan-global/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2fnk9dpc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

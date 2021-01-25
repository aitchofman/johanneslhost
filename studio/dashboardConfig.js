export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '600f1ade45d0270b3a638103',
                  title: 'Sanity Studio',
                  name: 'johanneslhost-studio',
                  apiId: '7bdf9d09-5d24-4d5a-8836-a1f27e1884f3'
                },
                {
                  buildHookId: '600f1ade3f092b09ae168846',
                  title: 'Portfolio Website',
                  name: 'johanneslhost',
                  apiId: '979d1ab4-e1ed-4d75-8a1f-4318faf90524'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aitchofman/johanneslhost',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://johanneslhost.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

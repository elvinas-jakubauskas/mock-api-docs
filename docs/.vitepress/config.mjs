import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from '../api-reference/api-reference.json' with { type: 'json' }

const sidebar = useSidebar({
  spec,
  linkPrefix: '/operations/',
})

export default defineConfig({
  title: 'Mock API Documentation',
  description: 'Elvinas Jakubauskas',


  themeConfig: {
    sidebar: [
      {
        text: 'Getting started',
        collapsed: true,
        items: [
          { text: 'About the Mock API documentation', link: '/api-docs/about-mock-api-docs.md' },
          { text: 'First steps', link: '/api-docs/first-steps.md' },
        ],
      },
      {
        text: 'Using the Mock API',
        collapsed: true,
        items: [
          { text: 'Getting payment information using the payment ID', link: '/api-docs/getting-payment-information-id.md' },
        ],
      },
      {
        text: 'Mock API reference',
        collapsed: true,
        items: [
          { text: 'About the Mock API reference', link: '/api-docs/about-mock-api-reference' },
          ...sidebar.generateSidebarGroups({
            linkPrefix: '/operations/',
          }).map(group => ({
            ...group,
            collapsed: true,
          })),
        ],
      },
    ],
  },

  markdown: {
    lineNumbers: true,
  },
})
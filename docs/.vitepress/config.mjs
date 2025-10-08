import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mock API Documentation",
  description: "Elvinas Jakubauskas",
    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    
  

    sidebar: [
      {
        text: 'Getting started',
        collapsed: true,
        items: [
          { text: 'About the Mock API documentation', link: '/api-docs/about-mock-api-docs.md' },
          { text: 'First steps', link: '/api-docs/first-steps.md' }
        ]
      },
      {
        text: 'Using the Mock API',
        collapsed: true,
        items: [
          { text: 'Getting payment information using the payment ID', link: '/api-docs/getting-payment-information-id.md' }
        ]
      },
      {
        text: 'Mock API reference',
        collapsed: true,
        items: [
          { text: 'About the Mock API reference', link: '/api-docs/about-mock-api-reference' },
          { text: 'Mock API reference', link: '/api-reference/api-reference.md' },
        ]
      }
    ],
  },
  markdown: {
      lineNumbers: true,
    },
})
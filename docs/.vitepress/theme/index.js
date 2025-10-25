// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { theme, useOpenapi } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-es-bundle'
import 'swagger-ui-dist/swagger-ui.css'
import './style.css'

import spec from '../../api-reference/api-reference.json'


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  
  enhanceApp({ app, router, siteData }) {

  useOpenapi({ 
      spec,
  }) 

    theme.enhanceApp({ app })
    // ...
  }
}

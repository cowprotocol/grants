import { siteConfig } from 'const/meta'
const {url, social} = siteConfig

export const mainMenu = [
  { id: 0, title: 'Home', url: url.root },
  { id: 1, title: 'Program overview', url: url.programOverview },
  { id: 2, title: 'Apply', url: url.apply },
]

export const footerMenu = [
  {
    id: 0, title: 'COW Grants', url: url.root, target: '_blank',
  },
]


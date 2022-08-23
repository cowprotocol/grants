import { siteConfig } from 'const/meta'
const {url, social} = siteConfig

export const mainMenu = [
  { id: 0, title: 'Overview', url: url.programOverview },
  { id: 1, title: 'Grants tracker', url: url.tracker },
  { id: 2, title: 'Apply', url: url.apply },
]

export const footerMenu = [
  {id: 0, title: 'Terms & Conditions', url: '/terms', target: "_parent"},
  {id: 1, title: social.forum.label, url: social.forum.url, target: '_blank'},
  {id: 2, title: social.discord.label, url: social.discord.url, target: '_blank'},
  {id: 3, title: social.twitter.label, url: social.twitter.url, target: '_blank'},
]


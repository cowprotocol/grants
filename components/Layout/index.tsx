import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import { Media, Color } from 'const/styles/variables'

import Head from 'next/head'
import { siteConfig } from 'const/meta'
import { mainMenu, footerMenu } from '../../const/menu'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { Analytics } from 'components/Analytics'

export type LayoutProps = PropsWithChildren<{
  siteConfigData?: any // needs fix
  metrics?: any // needs fix
  mainMenuData?: any // needs fix
  footerMenuData?: any // needs fix
  route?: string
  pageTitle?: string
}>

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 100%;

  ${Media.desktopDown} {
    margin: 0 auto;
  }

  ${Media.tabletPortrait} {
    margin: 0 auto;
  }
`

const Content = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  min-height: calc(100vh - 14.5rem);

  p > a,
  li > a {   
    text-decoration: underline;
    cursor: pointer;
    
      &:link, 
      &:visited {
        color: ${Color.darkBlue};
      }
  }
`

export default function Layout({ children, route, pageTitle }: LayoutProps) {
  const isSplitted = route === '/' ? true : false
  const { title } = siteConfig
  const headTitle = pageTitle ? `${pageTitle} - ${title}` : `${title}` // Must use a single (text) node to prevent Next.js Title warnings

  return (
    <>
      {headTitle && <Head>
        <title>{headTitle}</title>
      </Head>}

      <Wrapper>
        <Header menu={mainMenu} siteConfig={siteConfig} split={isSplitted} />
        <Content>{children ? children : 'No content found'}</Content>
        <Footer menu={footerMenu} siteConfig={siteConfig} split={isSplitted} />
        <Analytics />
      </Wrapper>
    </>
  )
}
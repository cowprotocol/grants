import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import { Media, Color } from 'const/styles/variables'

import { siteConfig } from 'const/meta'
import { mainMenu, footerMenu } from '../../const/menu'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'

export type LayoutProps = PropsWithChildren<{
  siteConfigData?: any // needs fix
  metrics?: any // needs fix
  mainMenuData?: any // needs fix
  footerMenuData?: any // needs fix
  route?: string
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


  p > a {   
    text-decoration: underline;
    cursor: pointer;
    
      &:link, 
      &:visited {
        color: ${Color.darkBlue};
      }
  }
`

export default function Layout({ children, route }: LayoutProps) {
  const isSplitted = route === '/' ? true : false
  return (
    <>
      <Wrapper>
        <Header menu={mainMenu} siteConfig={siteConfig} split={isSplitted} />
        <Content>{children ? children : 'No content found'}</Content>
        <Footer menu={footerMenu} siteConfig={siteConfig} split={isSplitted} />
      </Wrapper>
    </>
  )
}
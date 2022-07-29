import styled from 'styled-components';
import { PropsWithChildren } from 'react'
import { Media } from 'const/styles/variables'

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
`

export default function Layout({ children, route }: LayoutProps) {
  const isSplitted = route === '/' ? true : false
  return (
    <>
      <Wrapper>
        
        <Content>{children ? children : 'No content found'}</Content>
        
      </Wrapper>
    </>
  )
}
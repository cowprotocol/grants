import styled from 'styled-components';
import { transparentize } from 'polished'
import { Color, Font, Media } from 'const/styles/variables'

export const SectionWrapper = styled.div<{ fixed?: boolean }>`
  display: flex;
  flex-flow: row wrap;
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
  top: ${({ fixed }) => fixed ? '0' : 'initial'};
  height: 100vh;

  ${Media.mobile} {
    flex-flow: column wrap;
    position: relative;
    height: auto;
  }
`

export const Section = styled.section<{ split?: boolean, hasImage?: boolean }>`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-flow: row wrap;

  ${Media.mobile} {
    height: auto;
    max-width: 100%;
    min-height: initial;
    flex-flow: column wrap;
  }

  ${({ split }) => (split && `
    display: flex;
    width: auto;
    flex: 1 1 50%;
  `)}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ split, hasImage }) => (split && hasImage && `
    ${Media.mobile} {
      min-height: initial;
      height: 6rem;
      flex: 1 1 100%;
    }

    > img {
      object-position: top;
    }
  `)}
`

export const SectionContent = styled.div<{ split?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 77vmin;
  height: ${({ split }) => split ? 'calc(100vh - 20vmin)' : 'auto'};
  padding: 0 10vmin;
  margin: ${({ split }) => split ? 'auto' : '16vmin auto'};
  justify-content: center;

  > h1 {
    text-align: center;
    font-size: 5vmin;
    line-height: 1.3;
    color: ${Color.black};
    font-weight: ${Font.weightLight};
    margin: 0 0 5.6vmin;
  }

  > p {
    font-size: 1.7vmin;
    text-align: center;
    font-weight: ${Font.weightNormal};
    line-height: 1.7;
    margin: 0 0 5.6vmin;
  }
`

export const Content = styled.main`
  margin: 0 auto;
  padding: 8vmin 3.2vmin;
  box-sizing: border-box;
  width: 100%;
  max-width: 90vmin;
  display: flex;
  flex-flow: column wrap;
  min-height: 80vmin;

  ${Media.mobile} {
    height: auto;
    max-width: 100%;
    min-height: initial;
  }

  p {
    margin: 0 0 1.6rem;
    font-size: ${Font.sizeDefault}rem;
    color: ${Color.grey};
    line-height: 1.4;
  }
`
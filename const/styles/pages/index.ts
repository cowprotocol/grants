import styled from 'styled-components';
import { transparentize } from 'polished'
import { Color, Font, Media } from 'const/styles/variables'
import Button from '@/components/Button'

export const SectionWrapper = styled.div<{ fixed?: boolean }>`
  display: flex;
  flex-flow: row wrap;
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
  top: ${({ fixed }) => fixed ? '0' : 'initial'};
  height: 100vh;

  ${Media.mediumDown} {
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

  ${Media.mediumDown} {
    height: auto;
    max-width: 100%;
    min-height: initial;
    flex-flow: column wrap;
  }

  ${({ split }) => (split && `
    display: flex;
    width: auto;
    flex: 1 1 50%;

    > img {
      max-height: 100vh;
    }
  `)}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ split, hasImage }) => (split && hasImage && `
    ${Media.tabletPortrait} {
      min-height: initial;
      height: 50vh;
      flex: 1 1 100%;

      > img {
        object-position: center -20rem;
        max-height: 34rem;
      }
    }

    ${Media.mobile}{
      min-height: initial;
      height: 50vh;
      flex: 1 1 100%;

      > img {
        object-position: center -20rem;
        max-height: 34rem;
      }
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

  ${Media.mediumDown} {
    max-width: 100%;
    height: auto;
    padding: 3rem 3rem 6rem;
  }

  > h1,
  > h2,
  > h3 {
    text-align: ${({ split }) => split ? 'center' : 'left'};
    font-size: 5vmin;
    line-height: 1.3;
    color: ${Color.black};
    font-weight: ${({ split }) => split ? Font.weightLight : Font.weightBold};
    margin: ${({ split }) => split ? '0 0 5.6vmin' : '0 0 2.4vmin'};

    > b {
      font-weight: ${Font.weightBold};
    }

    ${Media.mediumDown} {
      font-size: 3.2rem;
    }
  }

  > h2 {
    font-size: 3vmin;
    margin: 2.4vmin 0;
    font-weight: ${Font.weightBold};

    ${Media.mediumDown} {
      font-size: 2.4rem;
      margin: 2.4rem 0;
    }
  }

  > h3 {
    font-size: 2vmin;
    margin: 0;
    font-weight: ${Font.weightBold};

    ${Media.mediumDown} {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }

  > p,
  > small {
    font-size: ${({ split }) => split ? '1.7vmin' : '1.6vmin'};
    text-align: ${({ split }) => split ? 'center' : 'left'};
    font-weight: ${Font.weightNormal};
    line-height: ${({ split }) => split ? '1.7' : '1.8'};
    margin: ${({ split }) => split ? '0 0 5.6vmin' : '0 0 2.4vmin'};

    ${Media.mediumDown} {
      font-size: 1.5rem;
    }
  }

  > p > strong,
  > small {
    color: ${Color.black};
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

  ${Media.mediumDown} {
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
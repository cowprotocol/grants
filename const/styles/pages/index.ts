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
  max-width: 77rem;
  height: ${({ split }) => split ? 'calc(100vh - 20rem)' : 'auto'};
  padding: 0 10rem;
  margin: ${({ split }) => split ? 'auto' : '16rem auto'};
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
    font-size: 5rem;
    line-height: 1.3;
    color: ${Color.black};
    font-weight: ${({ split }) => split ? Font.weightLight : Font.weightBold};
    margin: ${({ split }) => split ? '0 0 5.6rem' : '0 0 2.4rem'};

    > b {
      font-weight: ${Font.weightBold};
    }

    ${Media.mediumDown} {
      font-size: 3.2rem;
    }
  }

  > h2 {
    font-size: 3rem;
    margin: 2.4rem 0;
    font-weight: ${Font.weightBold};

    ${Media.mediumDown} {
      font-size: 2.4rem;
      margin: 2.4rem 0;
    }
  }

  > h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: ${Font.weightBold};

    ${Media.mediumDown} {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }

  > p,
  > small {
    font-size: ${({ split }) => split ? '1.7rem' : '1.6rem'};
    text-align: ${({ split }) => split ? 'center' : 'left'};
    font-weight: ${Font.weightNormal};
    line-height: ${({ split }) => split ? '1.7' : '1.8'};
    margin: ${({ split }) => split ? '0 0 5.6rem' : '0 0 2.4rem'};
    word-break: break-word;

    ${Media.mediumDown} {
      font-size: 1.5rem;
    }
  }

  > p > strong,
  > small {
    color: ${Color.black};
  }

  > ul > li {
    word-break: break-word;
  }
`

export const Content = styled.main`
  margin: 0 auto;
  padding: 8rem 3.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-flow: column wrap;
  min-height: 80rem;

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
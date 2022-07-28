import "inter-ui/inter.css";
import styled, { createGlobalStyle } from 'styled-components'
import { Color, Font, Media } from 'const/styles/variables'
import { transparentize } from "polished";

const GlobalStyles = createGlobalStyle`

  html, body { font-family: "Inter", "system-ui"; }

  @supports (font-variation-settings: normal) {
    html, body { font-family: "Inter var", "system-ui"; }
  }

  html, body {  
    width: 100%;
    min-height: 100vh;
    min-width: 300px;
    margin: 0;
    font-size: 62.5%;
    line-height: 10px;
    font-family: ${Font.default};
    background: linear-gradient(249.79deg, #CAE9FF 0%, #CAE9FF 17.99%, #CCE8FF 29.72%, #CEE6FF 41.61%, #D1E3FF 50.02%, #D4E0FF 62.41%, #D8DDFF 69.37%, #DCD9FF 75.14%, #E0D4FF 79.35%, #E4D0FF 83.02%, #E8CCFF 85.97%, #ECC8FF 89.27%, #EEC4FF 92.74%, #F1C1FF 96.61%, #F4BDFF 100%);
    color: ${Color.grey};
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-variant: none;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    scrollbar-color: ${Color.black} ${Color.white};

    html,
    input,
    textarea,
    button {
      font-family: 'Inter', sans-serif;
      font-display: fallback;
  }

  @supports (font-variation-settings: normal) {
    html,
    input,
    textarea,
    button {
      font-family: 'Inter var', sans-serif;
    }
  }

    &::-webkit-scrollbar {
      width: 1.6rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${Color.black};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Color.black};
      border-radius: 10rem;
    }
  }

  *::selection {
    background: ${Color.black};
    color: ${Color.white};
  }

  *::-moz-selection {
    background: ${Color.black};
  }

  *::-webkit-selection {
    background: ${Color.black};
  }

  *::-moz-placeholder {
    line-height: revert;
  }

  ::-webkit-scrollbar {
    width: 0.6rem !important;
    height: 0.6rem !important;
  }

  ::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.2);
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {   
    text-decoration: underline;
    cursor: pointer;
    
      &:link, 
      &:visited {
        color: ${Color.black};
      }
  }

  h1, h2, h3, p, b, i, strong {
    margin: 0;
    line-height: 1;
  }

  ul, ol {
    font-size: ${Font.sizeDefault}rem;
    line-height: 1.7;
    margin: 0 0 2.4rem;

    ${Media.mediumDown} {
      font-size: 1.5rem;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    outline: 0;

    &:hover {
      background-color: var(--color-background-button-hover);
      color: var(--color-text-button-hover);
    }

    &:disabled,
    &[disabled]{
      opacity: .35;
      pointer-events: none;

      &:hover {
        opacity: .35;
      pointer-events: none;
      }
    }
  }

  input {
    
    &::placeholder {
      color: inherit;
      font-size: inherit;
    }
    
    &:focus::placeholder {
      color: transparent;
    }

    &:focus {
      border-color: ${Color.black};
    }

    &:disabled {
      opacity: 0.8;
    }
  }
  
  .noScroll {
    overflow: hidden;
  }

  .mobileOnly {
    display: none !important;
    
    ${Media.mobile} {
      display: block !important;
    }
  }

  .hideMobile {
    ${Media.mobile} {
      display: none;
    }
  }

  .container {
    margin: 0 auto;

    ${Media.smallUp} {
      max-width: 72rem;
    }
    
    ${Media.mediumUp} {
      max-width: 96rem;
    }

    ${Media.mediumOnly} {
      max-width: 72rem;
    }

    ${Media.desktop} {
      max-width: 114rem;
    }

    ${Media.desktopLarge} {
      max-width: 132rem;
    }
  }
`

export const ExternalLink = styled.a`
  display: inline-block;
  color: ${Color.black};
  font-size: inherit;
  white-space: nowrap;

  &::after {
    content: "↗";
    color: inherit;
    font-size: ${Font.sizeDefault}rem;
    display: inline-block;
    margin: 0 0 0 0.2rem;
  }
`

export const DropDown = styled.div`
  border: 0.1rem solid  ${Color.black};
  border-radius: 0.6rem;
  width: 100%;
  padding: 0;
  background: transparent;
  color: ${Color.black};
  font-size: 1.8rem;
  margin: 0 0 2.4rem;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  font-family: ${Font.default};

  &::after {
    content: "▼";
    position: absolute;
    border: 0;
    color: inherit;
    font-size: ${Font.sizeDefault}rem;
    display: flex;
    align-items: center;
    pointer-events: none;
    margin: auto;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 1.2rem;
    cursor: pointer;
  }

  > select {
    appearance: none;
    cursor: pointer;
    height: 100%;
    padding: 1.2rem;
    width: 100%;
    display: block;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
    border-radius: inherit;
    background: ${transparentize(0.9, Color.black)};

      &:focus {
        outline: none;
      }

      > option {
        background-color: ${Color.black};
        color: ${Color.black};
      }
  }
`

export default GlobalStyles

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { transparentize } from 'polished'
import Button from 'components/Button'
import { Defaults, Color, Font, Media } from 'const/styles/variables'
// import useMediaQuery from 'lib/hooks/useMediaQuery';

const MenuImage = 'images/icons/menu.svg'

const Wrapper = styled.header<{ split: boolean }>`
  z-index: 10;
  width: ${({ split }) => split ? '50%' : '100%'};
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: ${({ split }) => split ? 'center' : 'flex-end'};
  align-items: center;
  background: transparent;
  padding: 0 5.6vmin;
  margin: 0 auto;
  position: fixed;
  top: 5rem;
  right: 0;
  transition: background 0.5s ease-in-out;

  ${Media.mobile} {
    padding: 3rem;
  }

  &.sticky {
    background: ${transparentize(0.4, Color.black)};
    backdrop-filter: blur(6rem);
  }

  > a {

    ${Media.mediumOnly} {
      margin: 0 2.4rem 0 auto;
    }
  }
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: ${Font.sizeDefault}rem;
  color: ${Color.grey};
  padding: 0;
  margin: 0;

  ${Media.mediumDown} {
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${Color.black};
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    gap: 5rem;
    overflow-y: auto;

    &.visible {
      position: fixed;
      display: flex;
      padding: 12rem 6rem 6rem;
      font-size: 3.2rem;

      ${Media.mobile} {
        font-size: 2rem;
      }
    }

  }

  > li:not(:last-of-type) {
    margin: 0 3.6rem 0 0;

    ${Media.mediumDown} {
      margin: 0 0 3.6rem;
      line-height: 1;
    }
  }

  > li {
    ${Media.mediumDown} {
      margin: 0 0 3.6rem;
      line-height: 1;
      width: 100%;
      text-align: center;
    }
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${Color.black};
      text-decoration: underline;
    }
  }
`

const CloseIcon = styled.button`
  display: none;
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  color: ${Color.black};
  background: transparent;
  border: 0;

  &::before {
    content: '✕';
    display: block;
    font-size: 5rem;
    font-family: ${Font.arial};

    ${Media.mobile} {
      font-size: 3.2rem;
    }
  }

  ${Media.mediumDown} {
    display: flex;
  }
`

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${transparentize(0.6, Color.grey)};
  border-radius: ${Defaults.borderRadius};
  text-decoration: none;
  height: 5.6rem;
  width: 5.6rem;

  ${Media.mobile} {
    height: 4.8rem;
    width: 4.8rem;
  }

  &::before {
    display: flex;
    content: "";
    background: url(${MenuImage}) no-repeat center/contain;
    width: 65%;
    height: 100%;
  }

  ${Media.mediumDown} {
    display: flex;
  }
`

const Logo = styled.div<{ alternateColor: boolean }>`
  cursor: pointer;
  font-size: 2.2vmin;
  line-height: 1;
  font-weight: ${Font.weightBold};
  color: ${({ alternateColor }) => alternateColor ? Color.blue : Color.black};
  position: fixed;
  top: 5vmin;
  left: 5vmin;
  z-index: 10;

  > span {
    font-weight: ${Font.weightLight};
    color: ${({ alternateColor }) => alternateColor ? Color.blue : Color.grey};
  }

  /* ${Media.mediumDown} {
  } */
`

export default function Header({ siteConfig, menu, split }) {
  // const swapURL = siteConfig.url.swap
  const [menuVisible, setIsMenuVisible] = useState(false)
  const toggleBodyScroll = () => {
    !menuVisible ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll')
  }

  return (
    <>
      <Link href={siteConfig.url.home}>
        <Logo alternateColor={split}>COW <span>GRANTS</span></Logo>
      </Link>
      <Wrapper split={split}>
        <Menu className={menuVisible ? 'visible' : ""}>
          {menu.map(({ id, title, url, target, rel }) => (
            <li key={id}>
              <a href={url} target={target} rel={rel}>{title}</a>
            </li>
          ))}
          <CloseIcon />
        </Menu>
        <MenuToggle />
      </Wrapper>
    </>
  )
}
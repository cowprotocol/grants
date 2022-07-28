import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { transparentize } from 'polished'
import Button from 'components/Button'
import { Defaults, Color, Font, Media } from 'const/styles/variables'
// import useMediaQuery from 'lib/hooks/useMediaQuery';

const MenuImage = 'images/icons/menu.svg'
const mobileHeaderHeight = `7rem`;

const Wrapper = styled.header<{ menuVisibile: boolean, split: boolean }>`
  z-index: 10;
  width: ${({ split }) =>  split ? '50%' : '100%'};
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: ${({ split }) => split ? 'center' : 'flex-end'};
  align-items: center;
  background: transparent;
  padding: 0 5.6rem;
  margin: 0 auto;
  position: fixed;
  top: 5rem;
  right: 0;
  transition: background 0.5s ease-in-out;

  ${Media.desktopDown} {
    padding: 0;
    width: 100%;
    height: ${({ menuVisible}) => menuVisible ? '100%' : mobileHeaderHeight};
    background: ${transparentize(0.1, Color.white)};
    top: 0;
    justify-content: center;
    backdrop-filter: blur(0.2rem);
  }

  > a {
    ${Media.desktopDown} {
      margin: 0 2.4rem 0 auto;
    }
  }
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: ${Font.sizeDefault}rem;
  color: ${Color.black};
  padding: 0;
  margin: 0;

  ${Media.desktopDown} {
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Color.black};
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    gap: 5rem;
    overflow-y: auto;
    font-size: 1.6rem;

    &.visible {
      position: fixed;
      display: flex;
      padding: 10rem 6rem 6rem;
      font-size: 1.8rem;

      ${Media.mobile} {
        font-size: 1.6rem;
      }
    }

  }

  > li:not(:last-of-type) {
    margin: 0 3.6rem 0 0;

    ${Media.desktopDown} {
      margin: 0 0 2.6rem;
      line-height: 1;
    }
  }

  > li {
    ${Media.desktopDown} {
      margin: 0 0 2.6rem;
      line-height: 1;
      width: 100%;
      text-align: center;
    }
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;

    ${Media.desktopDown} {
      color: ${Color.white};
    }

    &:hover {
      text-decoration: underline;

      ${Media.desktopDown} {
        color: ${Color.white};
      }
    }
  }
`

const CloseIcon = styled.button`
  display: none;
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  color: ${Color.white};
  background: transparent;
  border: 0;

  &:hover {
    color: ${Color.white};
  }

  &::before {
    content: '✕';
    display: block;
    font-size: 5rem;
    font-family: ${Font.arial};

    ${Media.desktopDown} {
      font-size: 2.8rem;
    }
  }

  ${Media.desktopDown} {
    display: flex;
    top: 1.4rem;
    right: 1.4rem;
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

  ${Media.desktopDown} {
    height: 4.2rem;
    width: 4.2rem;
    margin: 0 1.6rem 0 auto;
  }

  &::before {
    display: flex;
    content: "";
    background: url(${MenuImage}) no-repeat center/contain;
    width: 65%;
    height: 100%;
  }

  ${Media.desktopDown} {
    display: flex;
  }
`

const Logo = styled.div<{ menuVisible: boolean, alternateColor: boolean }>`
  cursor: pointer;
  font-size: 2.2rem;
  line-height: 1;
  font-weight: ${Font.weightBold};
  color: ${({ menuVisible, alternateColor }) => menuVisible || alternateColor ? Color.white : Color.black};
  position: fixed;
  top: 5rem;
  left: 5rem;
  z-index: 15;

  ${Media.desktopDown} {
    font-size: 2.2rem;
    top: 0;
    left: 1.6rem;
    bottom: 0;
    margin: 0;
    height: ${mobileHeaderHeight};
    align-items: center;
    display: flex;
    color: ${({ menuVisible }) => menuVisible ? Color.white : Color.black};
  }

  > span {
    font-weight: ${Font.weightLight};
    color: ${({ alternateColor }) => alternateColor ? Color.blue : Color.grey};

    ${Media.desktopDown} {
      color: ${({ menuVisible }) => menuVisible ? Color.white : Color.black};
    }
  }
`

export default function Header({ siteConfig, menu, split }) {
  const [menuVisible, setIsMenuVisible] = useState(false)
  const toggleBodyScroll = () => {
    !menuVisible ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll')
  }
  const handleClick = () => {
      setIsMenuVisible(!menuVisible)
      toggleBodyScroll()
  }

  return (
    <>
      <Link href={siteConfig.url.home}>
        <Logo menuVisible={menuVisible} alternateColor={split}>COW <span>GRANTS</span></Logo>
      </Link>
      <Wrapper menuVisible={menuVisible} split={split}>
        <Menu className={menuVisible ? 'visible' : ""}>
          {menu.map(({ id, title, url, target, rel }) => (
            <li key={id}>
              <a href={url} target={target} rel={rel}>{title}</a>
            </li>
          ))}
          <CloseIcon onClick={handleClick} />
        </Menu>
        <MenuToggle onClick={handleClick} />
      </Wrapper>
    </>
  )
}
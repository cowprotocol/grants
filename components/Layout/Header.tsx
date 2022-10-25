/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { transparentize } from 'polished'
import { Defaults, Color, Font, Media } from 'const/styles/variables'
import useMediaQuery from 'lib/hooks/useMediaQuery';
import { InView } from 'react-intersection-observer'

const MenuImage = 'images/icons/menu.svg'
const mobileHeaderHeight = `7rem`;

const Pixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  display:block;
  background: transparent;
`

const Wrapper = styled.header<{ menuVisibile: boolean, split: boolean }>`
  z-index: ${({ menuVisible }) => menuVisible ? '100' : '10'};
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0 2.4rem;
  margin: 0 auto;
  position: fixed;
  top: 0;
  height: 8rem;
  right: 0;
  transition: background 0.5s ease-in-out;

  ${Media.desktopDown} {
    padding: 0 1.6rem;
    width: 100%;
    height: ${({ menuVisible }) => menuVisible ? '100%' : mobileHeaderHeight};
    background: ${transparentize(0.1, Color.lightBlue)};
    justify-content: center;
    backdrop-filter: blur(0.2rem);
  }

  > a {
    ${Media.desktopDown} {
      margin: 0 2.4rem 0 auto;
    }
  }

  &.sticky {
    background: ${transparentize(0.1, Color.lightBlue)};);
    backdrop-filter: blur(5px);
  }
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: 1.6rem;
  color: ${Color.darkBlue};
  padding: 0;
  margin: 0;

  ${Media.desktopDown} {
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Color.darkBlue};
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    gap: 5rem;
    overflow-y: auto;

    &.visible {
      position: fixed;
      display: flex;
      padding: 10rem 6rem 6rem;
      font-size: 1.8rem;

      ${Media.mobile} {
        font-size: 2rem;
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
      color: ${Color.lightBlue};
    }

    &:hover {
      text-decoration: underline;

      ${Media.desktopDown} {
        color: ${Color.lightBlue};
      }
    }
  }
`

const CloseIcon = styled.button`
  display: none;
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  color: ${Color.lightBlue};
  background: transparent;
  border: 0;

  &:hover {
    color: ${Color.lightBlue};
  }

  &::before {
    content: '✕';
    display: block;
    font-size: 5rem;
    font-family: ${Font.arial};

    ${Media.desktopDown} {
      font-size: 3.2rem;
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
  border: 0.1rem solid ${transparentize(0.6, Color.border)};
  border-radius: ${Defaults.borderRadius};
  text-decoration: none;
  height: 5.6rem;
  width: 5.6rem;

  ${Media.desktopDown} {
    height: 4.2rem;
    width: 4.2rem;
    margin: 0 0 0 auto;
  }

  &::before {
    display: flex;
    content: "";
    background: url(${MenuImage}) no-repeat center/contain;
    width: 100%;
    height: 100%;
  }

  ${Media.desktopDown} {
    display: flex;
  }
`

const Logo = styled.div<{ menuVisible: boolean, alternateColor: boolean }>`
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: ${Font.weightBold};
  color: ${({ menuVisible, alternateColor }) => menuVisible || alternateColor ? Color.lightBlue : Color.darkBlue};
  z-index: 15;
  height: 3.8rem;
  width: 11.9rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${Media.desktopDown} {
    font-size: 2.2rem;
    margin: 0;
    height: ${mobileHeaderHeight};
    align-items: center;
    display: flex;
    color: ${({ menuVisible }) => menuVisible ? Color.lightBlue : Color.darkBlue};
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

  const isDesktopDown = useMediaQuery(`(max-width: ${Media.desktopScreen})`);

  return (
    <InView threshold={1} delay={500}>
      {({ inView, ref }) => (
        <>
          <Pixel ref={ref} />
          <Wrapper menuVisible={menuVisible} split={split} className={!inView && 'sticky'}>
            <Link href={siteConfig.url.home}>
              <Logo menuVisible={menuVisible} alternateColor={split}>
                <img src={`images/logo${(!isDesktopDown && split && inView) ? '-light' : ''}.svg`} alt="CoW Grants Program" />
              </Logo>
            </Link>
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
      )}
    </InView>
  )
}
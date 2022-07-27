import styled from 'styled-components';
import Link from 'next/link'
import { Color, Font, Media } from 'const/styles/variables'

const Wrapper = styled.footer<{ split: boolean }>`
  display: flex;
  justify-content: ${({ split }) => split ? 'center' : 'flex-end'};
  z-index: 1;
  width: ${({ split }) => split ? '50%' : '100%'};
  padding: 0;
  position: fixed;
  bottom: 0;
  right: 0;

  ${Media.mobile} {
  }
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: 1.2rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  color: inherit;
  padding: 2.4rem 0;
  margin: 0;
  width: 100%;

  ${Media.mobile} {
    text-align: center;
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;

    ${Media.mediumDown} {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${Color.black};
      text-decoration: underline;
    }
  }
`

export default function Footer({ siteConfig, menu, split }) {
  const { social } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper split={split}>
      <Menu>
        {menu.length > 0 && <>{menu.map(({ id, title, url, target }) => (
          <li key={id}>
            <Link href={url}>
              <a target={target}>
                {title}
              </a>
            </Link>
          </li>
        ))}</>}
        <li>©{siteConfig.title} - {currentYear}</li>
      </Menu>

    </Wrapper >
  )
}
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// import { ExternalLink } from '@/const/styles/global'
import { siteConfig } from '@/const/meta'

import Layout from '@/components/Layout'
import { Section, SectionContent, SectionWrapper } from '../const/styles/pages/index'
import Button from '@/components/Button'

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

interface HomeProps {
  siteConfigData: typeof siteConfig
}

export default function Home({ siteConfigData }: HomeProps) {
  const { title, descriptionShort } = siteConfigData
  const router = useRouter()

  return (
    // get page route from next.js router and pass it to Layout component as props 
    <Layout route={router.pathname}>

      <Head>
        <title>{title} - {descriptionShort}</title>
      </Head>

      <SectionWrapper>
        <Section split hasImage>
         <img src="/images/cow-grants-bg-small-2.jpg" alt="COW Grants Program" />
        </Section>

        <Section split>
          <SectionContent split>
          <h1>The mission of the <b>Grants Program</b> is to fund growth of the Cow Protocol ecosystem.</h1>
          <p>CoW Protocol&apos;s vision is a future where digital assets can be traded in a fair, efficient and reliable manner among people and communities around the world. Our mission is to make CoW Protocol the best and most popular venue to trade digital assets.</p>
          <Button fontSize={1.8} label='Apply for a grant' href="/apply" />
          </SectionContent>
        </Section>

      </SectionWrapper>

    </Layout >
  )
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const siteConfigData = siteConfig
  return {
    props: {
      siteConfigData
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
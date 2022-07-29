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

      <h1>Coming Soon</h1>

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
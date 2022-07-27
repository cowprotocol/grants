import Link from 'next/link'
import Layout from 'components/Layout/index'
import { Section, SectionContent } from '../const/styles/pages/index'

export default function Overview() {
  return (
    <Layout>
      <Section>
        <SectionContent>
          <h1>Grants tracker</h1>
          <p>
            This page provides an overview on the current state of all the grants.</p>
          </SectionContent>
      </Section>
    </Layout>
  )
}
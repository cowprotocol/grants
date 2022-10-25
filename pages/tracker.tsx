import Layout from 'components/Layout/index'
import { useState } from 'react'
import { siteConfig } from '../const/meta'
import { Section, SectionContent } from '../const/styles/pages/index'
import Button from '@/components/Button'

export default function Overview() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout pageTitle="Grants tracker">
      <Section>
        <SectionContent>
          <h1>Grants tracker</h1>
          <p>
            The grants tracker provides an overview on the current state of all the grants.</p>

            <Button fontSize={2.2} label='Grants tracker overview' rel="noopener" target="_blank" href={siteConfig.url.airtableTracker} />

            {/* {loading && <p><b>Loading the Grants tracker overview...</b>
            <br />
            <span>Not loading? <a href={siteConfig.url.airtableTracker} target="_blank" rel="noopener noreferrer">Visit the Grants tracker overview directly</a></span>
            </p>}
            <iframe onLoad={() => setLoading(false)} className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrfR2hI0JBMdPfTt?backgroundColor=blue&layout=card&viewControls=on" frameBorder="0" width="100%" height="533"></iframe> */}
          
          </SectionContent>
      </Section>
    </Layout>
  )
}
import Layout from 'components/Layout/index'
import { useState } from 'react'
import { Section, SectionContent } from '../const/styles/pages/index'

export default function Overview() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <Section>
        <SectionContent>
          <h1>Grants tracker</h1>
          <p>
            This page provides an overview on the current state of all the grants.</p>

            {loading && <p><b>Loading grants tracker overview...</b></p>}
            <iframe onLoad={() => setLoading(false)} className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrfR2hI0JBMdPfTt?backgroundColor=blue&layout=card&viewControls=on" frameBorder="0" width="100%" height="533"></iframe>
          </SectionContent>
      </Section>
    </Layout>
  )
}
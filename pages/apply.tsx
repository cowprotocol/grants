import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import Layout from 'components/Layout/index'
import { Section, SectionContent } from '../const/styles/pages/index'

export default function Apply() {
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
      <Section>
        <SectionContent>
          <h1>Apply for a grant</h1>
          <p>The primary areas of growth for the CoW Protocol under this proposal are defined as:</p>
            <ul>
              <li>CoWmunity Growth</li>
              <li>User interface and User experience (UI/UX)</li>
              <li>Decentralization</li>
              <li>Solvers</li>
              <li>Dev. Tools (SDK)</li>
              <li>Integrations and Protocol order flow</li>
              <li>Other/misc.</li>
            </ul>

<p>
            After you have received email confirmation that your application was successfully submitted, we will be in touch shortly afterwards to discuss next steps! Please ensure that you have received email confirmation your application was submitted, otherwise we can&apos;t guarantee your application was successfully received.
<br/><br/>
            For more information, check out the <Link href="/overview">COW Grants program overview</Link> to read on judgment criteria for the applications.</p>
        
            {loading && <p><b>Loading grants application form...</b></p>}
          <iframe src="https://airtable.com/embed/shrt7Rmd5XMYooRsu?backgroundColor=blue" onLoad={() => setLoading(false)} frameBorder="0" width="100%" height="1719" className="airtable-embed airtable-dynamic-height"></iframe>
        </SectionContent>
      </Section>
    </Layout>
  )
}
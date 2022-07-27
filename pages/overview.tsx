import Link from 'next/link'
import Layout from 'components/Layout/index'
import { Section, SectionContent } from '../const/styles/pages/index'

export default function Overview() {
  return (
    <Layout>
      <Section>
        <SectionContent>
          <h1>Grants program overview</h1>
          <p>
            CoW Protocol&rsquo;s vision is a future where digital assets can be traded in a fair, efficient and reliable manner among people and communities around the world. Our mission is to make CoW Protocol the best and most popular venue to trade digital assets. We will work toward the mission by attracting the brightest minds in trading and decentralized systems, diligently working to innovate and improve the CoW Protocol.
          <br/>
          <br/>
          The mission of the CowDAO Grants Program, CGP, is to provide funding to help grow the Cow Protocol ecosystem. For this, CowDAO dedicates 600K wXDAI + 600K COW tokens worth of funds for the first 6 months of the grants being live.&nbsp;
          <br/>
          <br/>
          The primary areas of growth for the CoW Protocol under this proposal are defined as:
          </p>
          <ul>
            <li>CoWmunity Growth</li>
            <li>User interface and User experience (UI/UX)</li>
            <li>Decentralization</li>
            <li>Solvers</li>
            <li>Dev. Tools (SDK)</li>
            <li>Integrations and Protocol order flow</li>
            <li>Other/misc.</li>
          </ul>
          <p>The judgment criteria for the grant applications will be based on the following:</p>
          <ul>
            <li>Feasibility - is the grant feasible to do at this moment or does the grant require upgrades in the protocol layer or overall ecosystem?</li>
            <li>Impact for the CoW Ecosystem - how much of a positive impact will this grant have to the overall CoW Protocol Ecosystem?</li>
            <li>Sanity check - is the amount of workload required for this grant accurate?&nbsp;</li>
            <li>Technical expertise of the grantee/s - does the grantee have the technical expertise to deliver the grant milestones?</li>
          </ul>
          <p>As <a href="https://snapshot.org/#/cow.eth/proposal/0xdc641be107f139753cea051f1bacb8b74b915713a95306c3994f5e03e20d6bef" target="_blank" rel="noopener noreferrer">CIP:8 lays out</a>, the CowDAO Grants Program Safe is managed by two different multi signature wallets. Safe #3 is shared with the CowDAO (Safe #1) and the Grants Committee (Safe #2). Safe #3 holds all the grant funds. You can check the governing process in the below picture:</p>
        </SectionContent>
      </Section>
    </Layout>
  )
}
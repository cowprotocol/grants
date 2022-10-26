/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from 'components/Layout/index'
import Button from '@/components/Button'
import { Section, SectionContent, Anchor } from '../const/styles/pages/index'

export default function Overview() {
  return (
    <Layout pageTitle="FAQ">
      <Section>
        <SectionContent>
          <h1>Frequently Asked Questions (FAQ)</h1>
         
          <h3>What is the CoW Grants Program (CGP)?</h3>
          <p>The mission of the CGP is to provide funding to help grow the CoW Protocol ecosystem and drive utility and demand for the COW token. The primary areas of growth for CoW Protocol under this proposal are defined as:</p>
          <ul>
            <li>CoWmunity growth</li>
            <li>User interface and user experience (UI/UX)</li>
            <li>Decentralization</li>
            <li>Develop new Solvers</li>
            <li>Developer tools (SDK)</li>
            <li>Integrations and protocol order flow</li>
            <li>Other/misc</li>
          </ul>

          <Anchor id="how-to-apply"/>
          <h3>How do I apply?</h3>
          <p>Fill out the <Link href="/apply">application form</Link>. Your application will be visible by everyone and the Grants committee will evaluate whether to decline, meet with you to adjust the application or send it to the official committee for final approval.&nbsp;</p>
          <p>If you have chosen your application to be private, it will initially only be visible by the Grants committee.&nbsp;</p>
          <p>You are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CoW DAO Participation Agreement</a> and the <Link href="/terms">CoW Grants Program - Terms and Conditions</Link> when applying for a grant.</p>
          
          <h3>What is the minimum and maximum funding amount of a CoW grant?</h3>
          <p>The CoW Grants Program provides different levels of funding according to the task to be completed. A more impactful task will require more work and thus will require more funding, while a less impactful trask will require much less work and thus require less funding.&nbsp;</p>
          
          <h3>How will I be compensated for my work?</h3>
          <p>The Grants Committee will work with you to establish possible milestones that could help split up the compensation so as to allow payment whenever a milestone is hit.</p>
          <p>If no milestones can be determined, the Grant will be paid a portion upfront to cover costs and the remaining total once the grant is successfully completed.</p>
          
          <h3>How will I receive the payment?</h3>
          <p>All payments will be made either in <a href="https://gnosisscan.io/token/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d" target="_blank" rel="noopener noreferrer">wXDAI</a> or <a href="https://gnosisscan.io/token/0x177127622c4a00f3d409b75571e12cb3c8973d3c" target="_blank" rel="noopener noreferrer">COW</a> (both on Gnosis Chain) by the CoW Grants Program Safe. The amount of each token is to be decided among the grantees and the Grants Committee on a case by case basis.&nbsp;</p>

          <h3>Can I apply for a grant if I am located in Country x?</h3>
          <p>Yes! CoW is a worldwide phenomenon. Regardless of where you are from, you are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CoW DAO Participation Agreement</a> and the <Link href="/terms">CoW Grants Program - Terms and Conditions</Link> when applying for a grant.&nbsp;</p>

          <h3>What type of work/project qualifies for a grant?</h3>
          <p>Anything that benefits the overall CoW Protocol ecosystem will qualify. Prioritization will be based on the impact the grant application will have in the CoW ecosystem &amp; CoWmunity.</p>
          <p>There are numerous functions that can be funded through grants, such as analytics, tooling, infrastructure, growth and many more. Furthermore, the CGP can also fund ecosystem projects that are complementary to the core product of CoW Protocol, such as CoW-themed gaming/NFT projects and solvers. Check out the &ldquo;<a href="#rfp">Request for Proposals</a>&rdquo; section in this document for some CoW-inspiration!</p>
          <p>The goal is to fund a wide range of grants, from simple projects to more elaborate and longer term projects. The funding amount will vary to reflect the complexity.</p>

          <h3>How often are applications approved?&nbsp;</h3>
          <p>CoW Grants Program aim to issue rounds of grant funding on an application basis until the first CoW DAO installment has dried up.</p>

          <h3>What happens if a grantee doesn&apos;t follow through their duties?</h3>
          <p>In order to prevent a grantee from running off with significant funds, the grants committee may establish milestones for any grants above $1K.&nbsp;</p>
          <p>If a grantee has ignored committee messages for 4 weeks, it is considered that the grant has been abandoned and if there are pending milestones to be achieved, they will be marked as incomplete and the funds will not be sent to the grantee.&nbsp;</p>

          <Button fontSize={1.8} marginTB={3.2} label='Apply for a grant' href="/apply" />
        </SectionContent>
      </Section>
    </Layout>
  )
}
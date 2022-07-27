/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from 'components/Layout/index'
import Button from '@/components/Button'
import { Section, SectionContent } from '../const/styles/pages/index'

export default function Overview() {
  return (
    <Layout>
      <Section>
        <SectionContent>
          <h1>Program overview</h1>
          <p>
            CoW Protocol&rsquo;s vision is a future where digital assets can be traded in a fair, efficient and reliable manner among people and communities around the world. Our mission is to make CoW Protocol the best and most popular venue to trade digital assets. We will work toward the mission by attracting the brightest minds in trading and decentralized systems, diligently working to innovate and improve the CoW Protocol.
            <br />
            <br />
            The mission of the CowDAO Grants Program, CGP, is to provide funding to help grow the Cow Protocol ecosystem. For this, CowDAO dedicates 600K wXDAI + 600K COW tokens worth of funds for the first 6 months of the grants being live.&nbsp;
            <br />
            <br />
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
          <a href="/images/grant-diagram.png" target="_blank" rel="noopener"><img src="/images/grant-diagram.png" alt="Grant Diagram" /></a>

          <h2>Application Process:</h2>
          <ol>
            <li><strong>Initial public application</strong>
            <br/>
            The application needs to be made using the <Link href="/apply">grant application form</Link> and by following the instructions in section <strong>&lsquo;How to apply&rsquo; </strong></li>
            <br/>
            <li><strong>Application to be chosen for review</strong><br/>
            The committee will choose up to three grants to be reviewed every month. The committee is not obligated to move a specific proposal to the review stage and will do so based on its sole discretion. An applicant can always decide to post their application as a formal DAO proposal.&nbsp;</li>
          </ol>
          <p><strong>The application process works as follows:&nbsp;</strong></p>
          <ol>
            <li>Anyone can submit an application to the Cow Grants DAO. They just need to use the application template to fill in their application details and then wait for the Grants Committee to reach out.&nbsp;</li>
            <li>The grants committee will then review the application, comment in the proposal which lead to two possible outcomes:&nbsp;</li>
            <ol>
              <li>The committee finds the application a successful and approves the grant</li>
              <li>The committee denies your grant, and that is the end of the process</li>
              <li>The committee meets with the grant applicant and reworks together the application to make sure that it aligns correctly with the DAO goals so that once changed, it can be reconsidered.</li>
            </ol>
          </ol>
          <p><em>* The committee will show its preference towards the grant in a public forum poll where all committee members are required to vote before moving the grant to the next stage. </em></p>
          <ol>
            <li>If the committee feedback is positive, then the Grants Committee will structure the grant.</li>
            <ol>
              <li>For structuring the grant, the committee will outline a series of milestones to be achieved to obtain the full funding.&nbsp;</li>
              <li>If the milestones are achieved, the grantee will be compensated for reaching that milestone and will move on to the next milestone if its the case</li>
              <li>If the milestones are not achieved, the Grants Committee reserves the right to stop funding the grantee until completion of the milestones, or decide to officially close the grant.&nbsp;</li>
            </ol>
          </ol>
          <h2>Application FAQs</h2>
          <h3>What is the CowDAO Grants Program (CGP)?</h3>
          <p>The mission of the CGP is to provide funding to help grow the CoW Protocol ecosystem and drive utility and demand for the $COW token. The primary areas of growth for the CoW Protocol under this proposal are defined as:</p>
          <ul>
            <li>CoWmunity Growth</li>
            <li>User interface and User experience (UI/UX)</li>
            <li>Decentralization</li>
            <li>Solvers</li>
            <li>Dev. Tools (SDK)</li>
            <li>Other/misc.</li>
          </ul>

          <h3>How do I apply?</h3>
          <p>Fill out the <Link href="/apply">application form</Link>. Your application will be visible by everyone and the Grants committee will evaluate whether to decline, meet with you to adjust the application or send it to the official committee for final approval.&nbsp;</p>
          <p>If you have chosen your application to be private, it will initially only be visible by the Grants committee.&nbsp;</p>
          <p>You are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CowDAO Participation Agreement</a> and the <Link href="/terms">COWDAO Grant Terms and Conditions</Link> when applying for a grant.</p>
          <h3>What is the minimum and maximum funding amount of a COW grant?</h3>
          <p>The CoW DAO Grants Program provides different levels of funding according to the task to be completed. A more impactful task will require more work and thus will require more funding, while a less impactful trask will require much less work and thus require less funding.&nbsp;</p>
          <h2>How will I be compensated for my work?</h2>
          <p>The Grants Committee will work with you to establish possible milestones that could help split up the compensation so as to allow payment whenever a milestone is hit.</p>
          <p>If no milestones can be determined, the Grant will be paid a portion upfront to cover costs and the remaining total once the grant is successfully completed.</p>
          <h3>How will I receive the payment?</h3>
          <p>All payments will be made either in wxDAI or COW by the Cow Grants Safe. The amount of each token is to be decided among the grantees and the Grants Committee on a case by case basis.&nbsp;</p>
          
          <h3>Can I apply for a grant if I am located in Country x?</h3>
          <p>Yes! CoW is a worldwide phenomenon. Regardless of where you are from, you are bound by the <a href="https://cloudflare-ipfs.com/ipfs/Qmf9MYhcG2pFrDoVy13p6FWeVF4nG9HbJvRfYYbhazTCFe" target="_blank" rel="noopener noreferrer">CowDAO Participation Agreement</a> and the <Link href="/terms">COWDAO Grant Terms and Conditions</Link> when applying for a grant.&nbsp;</p>
          
          <h3>What type of work/project qualifies for a grant?</h3>
          <p>Anything that benefits the overall CoW Protocol ecosystem will qualify. Prioritization will be based on the impact the grant application will have in the CoW ecosystem &amp; CoWmunity.</p>
          <p>There are numerous functions that can be funded through grants, such as analytics, tooling, infrastructure, growth and many more. Furthermore, the CGP can also fund ecosystem projects that are complementary to the core product of CoW Protocol, such as CoW-themed gaming/NFT projects or Solvers. Check out the &ldquo;<strong>Request for Proposals</strong>&rdquo; section in this document for some CoW-inspiration!</p>
          <p>The goal is to fund a wide range of grants, from simple projects to more elaborate and longer term projects. The funding amount will vary to reflect the complexity.</p>
          
          <h3>How often are applications approved?&nbsp;</h3>
          <p>CowDAO Grants aim to issue rounds of grant funding on an application basis until the first CowDAO installment has dried up.</p>
          
          <h3>What happens if a grantee doesn&apos;t follow through their duties?</h3>
          <p>In order to prevent a grantee from running off with significant funds, the grants committee may establish milestones for any grants above $1K.&nbsp;</p>
          <p>If a grantee has ignored committee messages for 4 weeks, it is considered that the grant has been abandoned and if there are pending milestones to be achieved, they will be marked as incomplete and the funds will not be sent to the grantee.&nbsp;</p>
          
          <h3>Request for Proposals</h3>
          <ol>
            <li>Trading Related Applications</li>
            <ol>
              <li>Trading view UI for Degen CoWs &rarr;&nbsp; Think advanced trading type views from places like DEX.guru, Kraken, Coinbase Pro etc.</li>
              <li>Limit order interface &rarr;&nbsp; Develop a custom limit order mechanism that works with CoW Protocol.</li>
              <li>DCA order interface &rarr; Build an interface that allows a user to submit orders in batches to be executed in a time period of x.</li>
              <li>Cross chain trading &rarr;&nbsp; Achieve cross chain order books &amp; CoWs.</li>
              <li>Wait for CoW &rarr;&nbsp; Develop a feature that allows users to signal the fact that they would rather wait for a CoW, than executing at the first possible moment.</li>
            </ol>
            <li>Analytics</li>
            <ol>
              <li>Dashboard about DEX activity on other networks (Polygon, Arbitrum, Optimism, BSC, etc).</li>
              <li>Protocol level analytics&nbsp;</li>
              <ol>
                <li>Dashboard to display CoWs (Coincidences of Wants).</li>
                <li>Governance Analytics.</li>
              </ol>
            </ol>
            <li>Tooling</li>
            <li>Solvers</li>
            <ol>
              <li>Develop a Solver specialized in weighted pools.</li>
              <li>Develop a Solver specialized in finding CoWs.</li>
              <li>Develop a Solver specialized in tapping into Private Liquidity.</li>
            </ol>
            <li>Integrations</li>
            <ol>
              <li>Build/achieve an integration from a major DeFi platform to route orders into CoW Protocol.</li>
            </ol>
            <li>Education&nbsp;</li>
            <ol>
              <li>How-to guides (written or video)</li>
              <ol>
                <li>Swap tokens</li>
                <li>Overall protocol mechanism</li>
                <li>Solvers</li>
                <li>Vault relayer&nbsp;</li>
                <li>API</li>
              </ol>
              <li>International language documentation &ndash; e.g. French, Spanish, German, Chinese, etc</li>
              <li>Content Creators &rarr; Create specific articles / papers or so that focused on the technicalities of CoW Protocol.</li>
            </ol>
            <li>Design</li>
            <ol>
              <li>Create Graphics (Art) Material for the CoWmunity &rarr;&nbsp; Memes, cow worlds, poaps, images.</li>
              <li>CoW POAP/NFT creative use cases &rarr;&nbsp; We want to have the most awesome POAPs &amp; NFTs across town. We are looking for creators to improve our design, style, distribution methods, and ways to Display.</li>
            </ol>
          </ol>

          <Button fontSize={1.8} marginTB={3.2} label='Apply for a grant' href="/apply" />
        </SectionContent>
      </Section>
    </Layout>
  )
}
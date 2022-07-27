import Link from 'next/link'
import Layout from 'components/Layout/index'

export default function Custom404() {
  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <section><p>This page could not be found. Please go back to the <Link href="/">home page.</Link></p></section>
    </Layout>
  )
}
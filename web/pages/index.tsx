import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'

import { sanityStaticProps, useSanityQuery, PortableText } from '../lib/sanity'

const QUERY = groq`{
  "page": *[_type == "page" && title == "Home"][0],
  "entries": *[_type == "entry"] | order(publishedAt desc),
  "quotes": *[_type == "quote"]
}`

const Home: NextPage<SanityProps> = props => {
  const { data, loading, error } = useSanityQuery(QUERY, props)
  return (
    <section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async context => ({
  props: await sanityStaticProps({ context, query: QUERY }),
  revalidate: 3600
})

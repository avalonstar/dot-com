import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'

import { sanityStaticProps, useSanityQuery } from '../lib/sanity'

const QUERY = groq`{
  "page": *[_type == "page" && title == "Portfolio"][0],
  "projects": *[_type == "project"] | order(date desc),
  "positions": *[_type == "position"] | order(date desc)
}`

const Portfolio: NextPage<SanityProps> = props => {
  const { data, loading, error } = useSanityQuery(QUERY, props)
  return (
    <section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default Portfolio

export const getStaticProps: GetStaticProps = async context => ({
  props: await sanityStaticProps({ context, query: QUERY }),
  revalidate: 3600
})

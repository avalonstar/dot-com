import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Container } from '@chakra-ui/core'

import { PageHeader, SEO } from '@/components'
import { EventList } from '@/components/partials/history'

const QUERY = graphql`
  {
    sanityRoute(slug: { current: { eq: "history" } }) {
      page {
        id
        heading
        subheading
      }
      title
    }
  }
`

export const HistoryPageTemplate = () => {
  const {
    sanityRoute: { page, title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Container>
        <PageHeader title={page.heading} subtitle={page.subheading} />
        <EventList />
      </Container>
    </Box>
  )
}

const HistoryPage = ({ pageContext }) => <HistoryPageTemplate {...pageContext} />

export default HistoryPage

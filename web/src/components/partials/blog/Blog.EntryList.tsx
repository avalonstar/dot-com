/** @jsx jsx */
import { useResponsiveValue } from '@theme-ui/match-media'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import numeral from 'numeral'
import { jsx, AspectRatio, Box, Flex, Heading, Text } from 'theme-ui'

import { useEntryData } from '@/hooks'
import { getBlogUrl } from '@/lib/helpers'

const EntryList = () => {
  const data = useEntryData()
  const ratio = useResponsiveValue([36 / 9, 52 / 9])
  return (
    <Box as="section">
      {data.map(({ node }, index: number) => {
        const { coverImage, id, number, publishedAt, slug, title } = node
        return (
          <Box key={id}>
            {index === 0 && (
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: 'muted.dark',
                  borderRadius: 2,
                  boxShadow: 'card.lg',
                  zIndex: '100',
                }}
              >
                <Link to={getBlogUrl(publishedAt, slug.current)}>
                  <AspectRatio ratio={ratio}>
                    {coverImage && coverImage.asset && (
                      <Img
                        fluid={coverImage.asset.fluid}
                        alt={coverImage.alt}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
                      />
                    )}
                  </AspectRatio>
                </Link>
              </Box>
            )}
            <Flex pt={3} sx={{ alignItems: 'baseline' }}>
              <Box>
                <Text variant="counter">{number > 0 ? numeral(number).format('000') : '000'}</Text>
              </Box>
              <Box pl={4} sx={{ flex: 1 }}>
                <Heading sx={{ lineHeight: '1.5rem' }}>
                  <Link to={getBlogUrl(publishedAt, slug.current)} sx={{ variant: 'links.title' }}>
                    {title}
                  </Link>
                  <span sx={{ color: 'main.avagreen' }}>.</span>
                </Heading>
                <Text as="time" variant="date">
                  {format(parseISO(publishedAt), 'MMMM d, yyyy')}
                </Text>
              </Box>
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}

export default EntryList

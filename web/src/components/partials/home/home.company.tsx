/** @jsx jsx */
import { jsx, Box, Flex, Grid, Heading, Link, Text } from 'theme-ui'

import iPhoneGitHub from '@/images/iphone-github.png'
import iPhonePatreon from '@/images/iphone-patreon.png'
import iPhoneTwitch from '@/images/iphone-twitch.png'
import Patreon from '@/images/patreon.svg'
import GitHub from '@/images/github.svg'
import Twitch from '@/images/twitch.svg'

const Image = ({ children }) => <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>{children}</Flex>

const Name = ({ text }) => (
  <Text variant="text.smallCaps" sx={{ color: 'main.avayellow', fontSize: 3, py: 1 }}>
    {text}
  </Text>
)

const Description = ({ children }) => (
  <Text variant="styles.p" sx={{ color: 'main.light', fontSize: 0 }}>
    {children}
  </Text>
)

const Company = () => {
  return (
    <Box as="section" sx={{ my: 8 }}>
      <Box sx={{ mb: [6, 4] }}>
        <Heading as="h2" variant="styles.h2">
          The company I <span sx={{ color: 'main.avagreen' }}>started.</span>
        </Heading>
        <Text variant="subheader">
          In 2019, Avalonstar{' '}
          <Link href="https://www.instagram.com/p/Bt2JcSVn0qz/">was reimagined and incorporated</Link> as a firm with a
          focus on down-to-earth content creation and providing services for our peers in the industry.
        </Text>
      </Box>
      <Grid gap={6} columns={['auto', 3]} sx={{ alignItems: 'stretch', lineHeight: 3 }}>
        <Box sx={{ mb: [2, 0] }}>
          <Image>
            <Twitch sx={{ height: '2rem', mb: 3 }} />
            <img src={iPhoneTwitch} sx={{ width: ['90%', '100%'] }} alt="" />
          </Image>
          <Name text="avalonstar.tv" />
          <Description>
            Providing chill, down-to-earth content four days a week&mdash;with a specialization in Destiny 2, Final
            Fantasy XIV, and (J)RPGs.
          </Description>
          <Link href="http://avalonstar.tv/">Follow me on Twitch &rarr;</Link>
        </Box>
        <Box sx={{ mb: [2, 0] }}>
          <Image>
            <GitHub sx={{ height: '2rem', mb: 3 }} />
            <img src={iPhoneGitHub} sx={{ width: ['90%', '100%'] }} alt="" />
          </Image>
          <Name text="Synthform" />
          <Description>
            The suite that powers the stream overlays at <Link href="http://avalonstar.tv">avalonstar.tv</Link> (and for
            dvelopers and hobbyist content creators&mdash;soon).
          </Description>
          <Link href="https://github.com/avalonstar/">Visit our GitHub &rarr;</Link>
        </Box>
        <Box sx={{ mb: [2, 0] }}>
          <Image>
            <Patreon sx={{ height: '2rem', mb: 3 }} />
            <img src={iPhonePatreon} sx={{ width: ['90%', '100%'] }} alt="" />
          </Image>
          <Name text="Patreon" />
          <Description>
            Support our content creation, or sign-up for our monthly enamel pin club! Get behind-the-scenes looks, and
            exclusive content.
          </Description>
          <Link href="https://patreon.com/avalonstar/">Become a Patron &rarr;</Link>
        </Box>
      </Grid>
    </Box>
  )
}

export default Company

import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'gatsby'
import { Box, Flex } from '@chakra-ui/core'

import { useNavigationData } from '@/hooks'

const MainNavigation = () => {
  const data = useNavigationData()
  return (
    <Box as="nav" sx={{ display: ['none', 'block'] }}>
      <AnimateSharedLayout>
        <Flex
          as="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            color: 'muted.bluegrey',
            '&:hover': { color: 'white' },
          }}
        >
          {data.map(({ node }) => {
            const { title, slug } = node
            return (
              <motion.li animate key={slug.current} sx={{ pl: 4 }}>
                <Link to={`/${slug.current}`} activeClassName="active" partiallyActive>
                  {title}
                </Link>
              </motion.li>
            )
          })}
        </Flex>
      </AnimateSharedLayout>
    </Box>
  )
}

export default MainNavigation

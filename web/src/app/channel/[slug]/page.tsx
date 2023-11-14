import { Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'
import Footer from '@/components/Footer'

interface ChannelProps {
  params: {
    slug: string
  }
}

export default function Channel({ params }: ChannelProps) {
  return (
    <Flex className="flex-col min-h-screen">
      <Header />
      <Flex className="flex-1">
        <Player />
        <Sidebar username={params.slug} />
      </Flex>
      <Footer />
    </Flex>
  )
}

import { Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import VPlayer from '@/components/VPlayer'
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
        <VPlayer username={params.slug} />
        <Sidebar username={params.slug} />
      </Flex>
      <Footer />
    </Flex>
  )
}

'use client'
import Header from '@/components/Header'
import { SearchIcon } from '@chakra-ui/icons'
import { YoutubeChannel } from '@/components/YoutubeChannel'

import { ChakraProvider, Flex, IconButton, Input } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Header />

      <Flex className="h-screen bg-zinc-900">
        <Input
          placeholder="Pesquisar"
          color={'lightblue'}
          className="flex flex-co"
        />
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        {/* <YoutubeChannel username="pewdiepie" /> */}
      </Flex>
    </ChakraProvider>
  )
}

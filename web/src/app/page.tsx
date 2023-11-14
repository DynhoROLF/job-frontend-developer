'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Footer from '@/components/Footer'
import { Button, Flex, Input, Text } from '@chakra-ui/react'

export default function Home() {
  const router = useRouter()
  const [bandName, setBandName] = useState('')

  const handleInputChange = (event: any) => {
    setBandName(event.target.value)
  }

  const handleSearch = () => {
    if (bandName) {
      router.push(`/channel/${bandName}`)
    } else {
      alert('Preencha o campo de pesquisa')
    }
  }

  return (
    <>
      <Flex className="h-screen bg-zinc-900 flex-col justify-center items-center">
        <Flex className="flex-col items-center mt-[-10rem]">
          <Text as="b" fontSize="6xl" color="gray.100">
            YourTube
          </Text>
        </Flex>
        <Flex className="flex-col items-center p-2">
          <Input
            placeholder="Nome da banda"
            color={'white'}
            focusBorderColor="red.400"
            isRequired
            width="20rem"
            value={bandName}
            onChange={handleInputChange}
            borderRadius="full"
          />
          <Button
            aria-label="Search database"
            className="mt-2"
            width="20rem"
            colorScheme="red"
            onClick={handleSearch}
            borderRadius="full"
          >
            PESQUISAR
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}

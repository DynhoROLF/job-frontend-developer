import Image from 'next/image'
import youtubeIcon from '../../public/images/youtube-icon.svg'
import { Flex, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex className="w-full bg-zinc-800 border-b border-zinc-600 text-zinc-100 items-center justify-center align-center py-1">
      <Image
        priority
        height={42}
        width={42}
        src={youtubeIcon}
        alt="Old youtube Icon"
      />
      <Text className="px-4 text-3xl font-bold items-center mt-3">
        YourTube
      </Text>
    </Flex>
  )
}

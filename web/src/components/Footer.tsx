import { Box, Avatar, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box position="fixed" bottom={0} left={0} width="100%" p={1} bg="zinc.900">
      <Flex
        direction="row"
        alignItems="center"
        className="border-t border-zinc-800 ml-1"
      >
        <Avatar src="https://github.com/DynhoROLF.png" size="sm" />
        <Link
          href="https://github.com/DynhoROLF"
          className="text-lg text-zinc-100 ml-1 p-2 underline"
        >
          Waldyr Filho
        </Link>
      </Flex>
    </Box>
  )
}

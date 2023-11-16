import { Flex, Text } from '@chakra-ui/react'
import Videos from './Videos'

export interface SidebarProps {
  username: string
}

export default function Sidebar(props: SidebarProps) {
  return (
    <aside className="w-[348px] bg-zinc-800 p-6 border-l border-zinc-700">
      <Text className="font-bold text-2xl text-white pb-6 mb-6 border-b border-zinc-600 block">
        Principais vídeos
      </Text>

      <Flex className="flex flex-col gap-8">
        <Videos username={props.username} />
      </Flex>
    </aside>
  )
}

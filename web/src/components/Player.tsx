import { Flex, Text } from '@chakra-ui/react'

export default function Player() {
  return (
    <Flex className="flex-1 flex-col bg-zinc-950">
      <Flex className="justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          vídeo
        </div>
      </Flex>

      <div className="p-8 max-w-[1100px] mx-auto">
        <Flex className="items-start gap-16">
          <div className="flex-1">
            <Text className="text-white font-bold" textAlign="left">
              1 Vídeo pesquisado asdasdasdasdasdasdasd
            </Text>
            <Text className="mt-4 text-zinc-300">descrição do vídeo</Text>
          </div>
        </Flex>
        <div></div>
      </div>
    </Flex>
  )
}

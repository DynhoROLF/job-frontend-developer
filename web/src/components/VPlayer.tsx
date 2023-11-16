'use client'

import { Flex, Text } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useFetch } from '@/app/hooks/useFetch'
import BandDetails from './BandDetails'

export interface VPlayerProps {
  username?: string
}

type ChannelDetail = {
  data?: {
    items: Array<{
      id: {
        videoId: string
      }
    }>
  }
  // type?: 'playing' | 'video'
}

export default function VPlayer({ username }: VPlayerProps) {
  const { data, isFetching } = useFetch<ChannelDetail[]>(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${username}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
  )

  const dataObject = data?.items
  const firstObject = dataObject?.[0]

  return (
    <Flex className="flex-1 flex-col bg-zinc-950">
      {firstObject ? (
        <Flex className="justify-center bg-black">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] ratio ratio-16x9">
            {isFetching && <p className="text-white">Carregando...</p>}
            <iframe
              src={`https://youtube.com/embed/${firstObject.id.videoId}`}
              title="Youtube video"
              allowFullScreen
            ></iframe>
          </div>
        </Flex>
      ) : (
        <Text className="text-white">Carregando...</Text>
      )}

      <BandDetails username={username} />
    </Flex>
  )
}

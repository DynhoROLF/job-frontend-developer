'use client'
import ptBR from 'date-fns/locale/pt-BR'
import { format } from 'date-fns'

import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { useFetch } from '@/app/hooks/useFetch'

export interface VideosProps {
  username: string
}

type ChannelDetail = {
  data?: {
    items: Array<{
      id: {
        videoId: string
      }
      snippet: {
        title: string
        description: string
        publishedAt: Date
        thumbnails: {
          default: {
            url: string
          }
        }
        videoUrl: string
        channelTitle: string
      }
    }>
  }
  // type?: 'playing' | 'video'
}

export default function Videos({ username }: VideosProps) {
  const { data } = useFetch<ChannelDetail[]>(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${username}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
  )

  const dataArray = data?.items

  const dataDisplay = dataArray?.map((object: any) => {
    const dateFormatted = format(
      new Date(object.snippet.publishedAt),
      "d' de 'MMMM' • 'yyyy",
      {
        locale: ptBR,
      },
    )

    return (
      <Link
        href={`https://youtube.com/video/${object.id.videoId}`}
        key={object.id.videoId}
      >
        <Text className="text-white">{dateFormatted}</Text>

        <div className="rounded border border-gray-600 p-4 mt-2">
          <Flex className="flex justify-between">
            <Flex className="flex flex-col">
              <Text className="text-zinc-100">{object.snippet.title}</Text>
              <Text className="text-zinc-300 text-sm">
                {object.snippet.description}
              </Text>
            </Flex>

            <Image
              src={object.snippet.thumbnails.default.url}
              alt="Banner of the video"
              width={60}
              height={50}
              className="flex "
            />
          </Flex>
          <Text className="text-zinc-100 text-sm font-bold underline">
            https://youtube.com/video/{object.id.videoId}
          </Text>
          <Text className="text-zinc-300">
            Canal: {object.snippet.channelTitle}
          </Text>
        </div>
      </Link>
    )
  })
  return <>{dataDisplay}</>
}

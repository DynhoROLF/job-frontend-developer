'use client'
import { useFetch } from '@/app/hooks/useFetch'
import { Flex, Image, Link, Text } from '@chakra-ui/react'
import {
  YoutubeLogo,
  TwitterLogo,
  MetaLogo,
  SpotifyLogo,
  Radio,
  House,
  MusicNotes,
  InstagramLogo,
} from '@phosphor-icons/react'

type BandDetail = {
  _embedded: {
    attractions: Array<{
      id: string
      name: string
      externalLinks: {
        youtube: Array<string>
        twitter: Array<string>
        itunes: Array<string>
        lastfm: Array<string>
        facebook: Array<string>
        spotify: Array<string>
        homepage: Array<string>
        instagram: Array<string>
      }
      images: Array<{
        url: string
      }>
    }>
  }
}

interface BandDetailProps {
  username?: string
}

export default function BandDetails({ username }: BandDetailProps) {
  const { data, isFetching } = useFetch<BandDetail>(
    `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${username}&size=1&apikey=${process.env.NEXT_PUBLIC_TICKETMASTER_KEY}`,
  )

  const bandData = data?._embedded.attractions

  return (
    <div className="p-8 max-w-[1100px] mx-1">
      {Array.isArray(bandData) &&
        bandData?.map((detail: any) => {
          return (
            <Flex className="items-start gap-16" key={detail.id}>
              <div className="flex-1">
                {isFetching && <p className="text-white">Carregando...</p>}
                <Text
                  className="text-white text-2xl font-bold flex"
                  textAlign="left"
                >
                  {detail.name}
                  <Flex
                    key={detail.externalLinks.homepage?.[0].url}
                    className="text-zinc-300 mx-2"
                  >
                    <Link
                      href={detail.externalLinks.homepage?.[0].url}
                      className="flex items-center justify-between gap-2"
                    >
                      <House size={32} className="hover:fill-blue-500" /> Home
                      Page
                    </Link>
                  </Flex>
                </Text>

                <Flex className="flex gap-2 items-center">
                  {detail.externalLinks.youtube?.[0].url && (
                    <Flex
                      key={detail.externalLinks.youtube?.[0].url}
                      className="text-zinc-300"
                    >
                      <Link
                        href={detail.externalLinks.youtube?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <YoutubeLogo size={32} className="hover:fill-red-600" />{' '}
                        YouTube
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.twitter?.[0].url && (
                    <Flex
                      key={detail.externalLinks.twitter?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.twitter?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <TwitterLogo
                          size={32}
                          className="hover:fill-blue-400"
                        />{' '}
                        Twitter
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.itunes?.[0].url && (
                    <Flex
                      key={detail.externalLinks.itunes?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.itunes?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <MusicNotes size={32} className="hover:fill-pink-300" />{' '}
                        iTunes
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.lastfm?.[0].url && (
                    <Flex
                      key={detail.externalLinks.lastfm?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.lastfm?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <Radio size={32} className="hover:fill-red-600" />{' '}
                        LastFM
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.facebook?.[0].url && (
                    <Flex
                      key={detail.externalLinks.facebook?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.facebook?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <MetaLogo size={32} className="hover:fill-blue-600" />{' '}
                        Facebook
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.spotify?.[0].url && (
                    <Flex
                      key={detail.externalLinks.spotify?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.spotify?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <SpotifyLogo
                          size={32}
                          className="hover:fill-green-500"
                        />{' '}
                        Spotify
                      </Link>
                    </Flex>
                  )}
                  {detail.externalLinks.instagram?.[0].url && (
                    <Flex
                      key={detail.externalLinks.instagram?.[0].url}
                      className="text-zinc-300 mx-2"
                    >
                      <Link
                        href={detail.externalLinks.instagram?.[0].url}
                        className="flex items-center justify-between gap-2"
                      >
                        <InstagramLogo
                          size={32}
                          className="hover:fill-pink-400"
                        />{' '}
                        Instagram
                      </Link>
                    </Flex>
                  )}

                  {/* detail.images?.[1].url */}
                </Flex>
                <Image
                  src={detail.images?.[1].url}
                  alt="Band image"
                  className="rounded-md mt-4 max-h-[7rem]"
                />
              </div>
            </Flex>
          )
        })}
    </div>
  )
}

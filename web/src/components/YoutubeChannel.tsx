import Videos from './Videos'

export interface YoutubeChannelProps {
  username: string
}

export async function YoutubeChannel({ username }: YoutubeChannelProps) {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=relevance&q=${username}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
  )
  const result = await response.json()

  return <Videos data={result} />
}

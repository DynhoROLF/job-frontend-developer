export interface YoutubeChannelProps {
  username: string
}

export async function YoutubeChannel({ username }: YoutubeChannelProps) {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?channelId=${username}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`,
  )
  const channel = await response.json()

  return (
    <div>
      <p>{JSON.stringify(channel)}</p>
    </div>
  )
}

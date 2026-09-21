export type Track {
  userId: number
  id: number
  title: string
  body: string
  description?: string | null
  genre: string
  mood: string | null
  duration: number
  play_count: number
  repost_count: number
  favorite_count: number
  permalink: string
  created_at: string
}

export type TracksResponse = {
  data: Track[]
}
export type Track = {
  id: number | string
  title: string
  artist?: string
  description?: string | null
  genre?: string | null
  mood?: string | null
  duration?: number
  play_count?: number
  repost_count?: number
  favorite_count?: number
  permalink?: string
  created_at?: string
  body?: string
  userId?: number
  user?: {
    id?: number | string
    name?: string
  }
  artwork?: {
    '150x150'?: string
    '480x480'?: string
    '1000x1000'?: string
  }
}

export type TracksResponse = {
  data: Track[]
}
export interface TrackArtwork {
  '150x150': string
  '480x480': string
  '1000x1000': string
}

export interface TrackUser {
  id: number
  name: string
  handle: string
}

export interface Track {
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
  artwork: TrackArtwork | null
  user: TrackUser
  permalink: string
  created_at: string
}
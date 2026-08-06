import TrackItem from './TrackItem'
import type { Track } from './TrackItem'

type TrackListProps = {
  tracks: Track[]
}

export default function TracksList({tracks}: TrackListProps) {
  return (
    <ul>
      {tracks.map(track => (
        <TrackItem key={track.id} track={track} />
      ))}
    </ul>
  )
}
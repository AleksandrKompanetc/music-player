import { useState } from 'react'
import TrackItem from './TrackItem'
import type { Track } from './TrackItem'

type TrackListProps = {
  tracks: Track[]
}

export default function TracksList({tracks}: TrackListProps) {
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  return (
    <ul>
      {tracks.map(track => (
        <TrackItem 
          key={track.id} 
          track={track} 
          isSelected={track.id === selectedTrackId}
          onSelect={() => setSelectedTrackId(track.id)}
        />
      ))}
    </ul>
  )
}
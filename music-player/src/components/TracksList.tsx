import { useState } from 'react'
import TrackItem from './TrackItem'

interface TrackListProps = {
  
}

const TracksList: React.FC<TracksListProps> = ({}) => {
  

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

export default TracksList
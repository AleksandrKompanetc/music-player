import type { Track } from '../types'
import TrackItem from './TrackItem'

interface TracksListProps {
  tracks: Track[]
  selectedTrackId: number | null
  onSelecttrack: (track: Track) => void
  loading: boolean
  error: string | null
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
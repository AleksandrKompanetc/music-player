import type { Track } from '../types'
import TrackItem from './TrackItem'

interface TracksListProps {
  tracks: Track[]
  selectedTrackId: number | null
  onSelectTrack: (track: Track) => void
  loading: boolean
  error: string | null
}

const TracksList: React.FC<TracksListProps> = ({
  tracks,
  selectedTrackId,
  onSelectTrack,
  loading,
  error,
}) => {
  if (loading) {
    return <div className='loading'>Loading...</div>
  }

  if (error) {
    return <div className='error'>{error}</div>
  }

  if (tracks.length === 0) {
    return <div className='empty'>No tracks found.</div>
  }

  return (
    <ul className='tracks-list'>
      {tracks.map(track => (
        <TrackItem 
          key={track.id}
          track={track}
          isSelected={selectedTrackId === track.id}
          onSelect={onSelectTrack}
        />
      ))}
    </ul>
  )
}

export default TracksList
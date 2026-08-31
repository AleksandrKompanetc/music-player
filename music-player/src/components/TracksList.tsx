import { Track } from '../types'

interface TrackListProps {
  tracks: Track[]
  selectedTrackId: string | null
  onSelectTrack: (track: Track) => void
  loading: boolean
  error: string | null
}

export default function TrackList({
  tracks,
  selectedTrackId,
  onSelectTrack,
  loading,
  error,
}: TrackListProps) {
  return (
    <ul>
      
    </ul>

  )
}
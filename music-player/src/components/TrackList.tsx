import { useEffect, useState } from 'react'
import type { Track } from '../types'
import TrackItem from './TrackItem'
import { getTracks } from '../api/audius'

export function TrackList() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  useEffect(() => {
    try {
      getTracks()
        .then((data) => {
          setTracks(data)
        })
    } catch (error) {
      console.error('Failed to load tracks', error)
    } finally {

    }
  })

  if (tracks === null) {
    return <div>
      <span>Loading ...</span>
    </div>
  }

  if (tracks.length === 0) {
    return <div>
      <span>No tracks available</span>
    </div>
  }

  return (
    <div>
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          isSelected={selectedTrackId === track.id}
          onSelect={(selectedTrack) => setSelectedTrackId(selectedTrack.id)}
        />
      ))}
    </div>
  )
}

export default TrackList









// import React from 'react'
// import type { Track } from '../types'
// import TrackItem from './TrackItem'

// interface TrackListProps {
//   tracks: Track[]
//   selectedTrackId: number | null
//   onSelectTrack: (track: Track) => void
//   loading: boolean
//   error: string | null
// }

// const TrackList: React.FC<TrackListProps> = ({
//   tracks,
//   selectedTrackId,
//   onSelectTrack,
//   loading,
//   error,
// }: TrackListProps) => {
//   if (loading) {
//     return <div className='loading'>Loading tracks...</div>
//   }
//   if (error) {
//     return <div className='error'>{error}</div>
//   }
//   if (tracks.length === 0) {
//     return <div className='empty'>No tracks available.</div>
//   }
//   return (
//     <div className='tracks-list'>
//       {tracks.map((track) => (
//         <TrackItem
//           key={track.id}
//           track={track}
//           isSelected={selectedTrackId === track.id}
//           onSelect={onSelectTrack}
//         />
//       ))}
//     </div>
//   )
// }

// export default TrackList





















// import type { Track } from '../types'
// import TrackItem from './TrackItem'

// interface TrackListProps {
//   tracks: Track[]
//   selectedTrackId: number | null
//   onSelectTrack: (track: Track) => void
//   loading: boolean
//   error: string | null
// }

// export default function TrackList({
//   tracks,
//   selectedTrackId,
//   onSelectTrack,
//   loading,
//   error,
// }: TrackListProps) {

//   if (loading) {
//     return <div className='loading'>Loading tracks...</div>
//   }

//   if (error) {
//     return <div className='error'>{error}</div>
//   }

//   if (tracks.length === 0) {
//     return <div className='empty'>No tracks available.</div>
//   }

//   return (
//     <div className='track-list'>
//       {tracks.map((track) => (
//         <TrackItem
//           key={track.id}
//           track={track}
//           isSelected={selectedTrackId === track.id}
//           onSelect={onSelectTrack}
//         />
//       ))}
//     </div>
//   )
// }
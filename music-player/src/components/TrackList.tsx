import React from 'react'
import type { Track } from '../types'
import TrackItem from './TrackItem'

interface TrackListProps {
  tracks: Track[]
  isSelected: boolean
  onSelectTrack: (track: Track) => void
}

const TrackList: React.FC = ({tracks, isSelected, onSelectTrack}: TrackListProps) => {
  return (
    <div>
      <ul>
        {tracks.map((track) => (
          <TrackItem 
            track={track}
            isSelected={isSelected}
            onSelect={onSelectTrack}
          />
        ))}
      </ul>
    </div>
  )
}

export default TrackList





















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
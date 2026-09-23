import { useState, useEffect } from 'react'
import { getTracks } from '../api/audius'
import type { Track } from './TracksList'

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  // useEffect(() => {
  //   const fetchTracks = async () => {

  //     try {
  //       const tracks: Track[] = await getTracks()
  //       setSelectedTrackId(tracks)
  //     } catch {
  //       // setError('Failed to load tracks')
  //     } finally {
  //       // setLoading(false)
  //     }
  //   }
  //   fetchTracks()
  // }, [selectedTrackId])

  return (
    <div>
      <h2>Details</h2>
      {!selectedTrack && !selectedTrackId && 'Track is not selected'}
      {!selectedTrack && selectedTrackId && 'Loading'}
      {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
      {selectedTrack && <div>
          <h3>{selectedTrack.title}</h3>
          <h4>Lyrics</h4>
          <p></p>
        </div>}
    </div>
  )
}













// import type { Track } from '../types'

// interface TrackDetailProps {
//   track: Track | null
// }

// export default function TrackDetail({ track }: TrackDetailProps) {
//   if (!track) {
//     return (
//       <div className='track-detail'>
//         <p>Track is not selected</p>
//       </div>
//     )
//   }

//   const imageUrl = track.artwork?.['480x480'] || track.artwork?.['1000x1000'] || `https://picsum.photos/seed/${track.id}/480/480`

//   return (
//     <div className='track-detail'>
//       <img
//         src={imageUrl}
//         alt={track.title}
//         className='track-image'
//       />

//       <h2 className="detail-title">{track.title}</h2>
      
//       <div className="detail-meta">
//         <span>ID: {track.id}</span>
//         <span>User ID: {track.userId}</span>
//       </div>
      
//       <p className="detail-body">{track.body}</p>
//     </div>
//   )
// }
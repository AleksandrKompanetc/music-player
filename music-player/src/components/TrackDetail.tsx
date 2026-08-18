import type { Track } from '../types'

interface TrackDetailProps {
  track: Track | null
}

const TrackDetail: React.FC<TrackDetailProps> = ({ track }) => {
  if (!track) {
    return (
      <div className="player-panel">
        <p>Track is not selected</p>
      </div>
    )
  }

  return (
    <div className="post-detail">
      {/* Большая картинка */}
      <img
        src={`https://picsum.photos/id/${track.id}/800/400`}
        alt={track.title}
        className="detail-image"
      />

      <h2 className="detail-title">{track.title}</h2>
      
      <div className="detail-meta">
        <span>ID: {track.id}</span>
        <span>User ID: {track.userId}</span>
      </div>
      
      <p className="detail-body">{track.body}</p>
    </div>
  )
}

export default TrackDetail


























// import { useState, useEffect } from 'react'
// import { getTracks } from '../api/audius'
// import type { Track } from './TracksList'

// export function TrackDetail() {
//   const [selectedTrack, setSelectedTrack] = useState(null)
//   const [selectedTrackId, setSelectedTrackId] = useState(null)

//   useEffect(() => {
//     const fetchTracks = async () => {

//       try {
//         const tracks: Track[] = await getTracks()
//         setSelectedTrackId(tracks)
//       } catch {
//         // setError('Failed to load tracks')
//       } finally {
//         // setLoading(false)
//       }
//     }
//     fetchTracks()
//   }, [selectedTrackId])

//   return (
//     <div>
//       <h2>Details</h2>
//       {!selectedTrack && !selectedTrackId && 'Track is not selected'}
//       {!selectedTrack && selectedTrackId && 'Loading'}
//       {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...'}
//       {selectedTrack && <div>
//           <h3>{selectedTrack.title}</h3>
//           <h4>Lyrics</h4>
//           <p></p>
//         </div>}
//     </div>
//   )
// }
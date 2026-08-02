import type { Track } from './TracksList'

type Props = {
  track: Track | null
}

export default function TrackDetail({
  track,
}: Props) {
  if (!track) {
    return (
      <div className="player-panel">
        <h2>Select a track</h2>
      </div>
    )
  }

  return (
    <div className="player-panel">
      {track.artwork?.['150x150'] && (
        <img
          src={track.artwork['150x150']}
          alt={track.title}
          className="player-cover"
        />
      )}

      <h2>{track.title}</h2>

      <audio
        controls
        src={`https://api.audius.co/v1/tracks/${track.id}/stream`}
      />
    </div>
  )
}


























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
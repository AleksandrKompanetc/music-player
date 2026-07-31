import { useState, useEffect } from 'react'
import { getTracks } from '../api/audius'
import type { Track } from './TracksList'

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  useEffect(() => {
    const fetchTracks = async () => {

      try {
        const tracks: Track[] = await getTracks()
        setSelectedTrackId(tracks)
      } catch {
        // setError('Failed to load tracks')
      } finally {
        // setLoading(false)
      }
    }
    fetchTracks()
  }, [selectedTrackId])

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
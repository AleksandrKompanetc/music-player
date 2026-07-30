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
    
  )
}
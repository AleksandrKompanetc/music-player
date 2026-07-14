import './App.css'
import { useState, useEffect, useMemo } from 'react'
import { getTracks } from './api/audius'

type Track = {
  id: string
  title: string
  artwork?: {
    '150x150'?: string
  }
  duration?: number
}

export function App() {
  const [tracks, setTracks] = useState<Track[]>([])
  // const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true)
      const tracks = await getTracks()
      setTracks(tracks)
      setLoading(false)
    }

    fetchTracks()
  }, [])

  if (loading) {
    return (
      <div>
        <h1>Music Player</h1>
        <span>Loading...</span>
      </div>
    )
  }

  if (!tracks.length) {
    return (
      <span>No tracks!</span>
    )
  }

  // let selectedTrack = tracks.find(track => track.id === selectedTrackId)

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={() => {
        setSelectedTrackId(null)
        // setSelectedTrack(null)
      }}>Reset selection</button>
      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        <ul>
          {tracks.map(track => {

            return (
              <li key={track.id} style={{ border: track.id === selectedTrackId ? '1px solid blue' : 'none' }}>
                <div
                  onClick={() => {
                    setSelectedTrackId(track.id)
                    // setSelectedTrack(track)
                  }}
                >
                  {track.title}
                </div>
                <audio
                  src={`https://api.audius.co/v1/tracks/${track.id}/stream`}
                  controls
                />
                <img 
                  src={track.artwork?.['150x150']}
                  alt={track.title}
                />
              </li>
            )
          })}
        </ul>
        <div>
          {selectedTrack
            ? selectedTrack.title
            : 'Track is not selected'}
        </div>
      </div>
    </div>
  )
}

export default App

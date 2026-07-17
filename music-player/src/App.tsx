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

  const selectedTrack = tracks.find(track => track.id === selectedTrackId) ?? null

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true)
      setError(null)

      try {
        const tracks: Track[] = await getTracks()
        setTracks(tracks)
      } catch {
        setError('Failed to load tracks')
      } finally {
        setLoading(false)
      }
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

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  if (!tracks.length) {
    return (
      <span>No tracks!</span>
    )
  }

  // let selectedTrack = tracks.find(track => track.id === selectedTrackId)

  return (
    <div className='app'>
      <h1 className='title'>Music Player</h1>
      <button onClick={() => {
        setSelectedTrackId(null)
        // setSelectedTrack(null)
      }}>Reset selection</button>
      <div className='layout'>
        <ul>
          {tracks.map(track => {

            return (
              <li className={`track-card ${track.id === selectedTrackId
                  ? 'active'
                  : ''
                }`}>
                <div
                  style={{ cursor: 'pointer' }}
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
                {track.artwork?.['150x150'] ? (
                  <img
                    src={track.artwork?.['150x150']}
                    alt={track.title}
                  />
                ) : (
                  <div>No image</div>
                )}
              </li>
            )
          })}
        </ul>
        {selectedTrack ? (
          <div>
            <h2>{selectedTrack.title}</h2>

            {selectedTrack.artwork?.['150x150'] && (
              <img
                src={selectedTrack.artwork['150x150']}
                alt={selectedTrack.title}
              />
            )}
          </div>
        ) : (
          <div>Track is not selected</div>
        )}
      </div>
    </div>
  )
}

export default App

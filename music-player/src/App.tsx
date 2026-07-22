import './App.css'
import { useState, useEffect } from 'react'
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
  const [search, setSearch] = useState('')

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

  const filteredTracks = tracks.filter(track =>
  track.title
    .toLowerCase()
    .includes(search.toLowerCase())
)

  // let selectedTrack = tracks.find(track => track.id === selectedTrackId)

  return (
    <div className='app'>
      <h1 className='title'>Music Player</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search track..."
      />

      <button
        className='reset-btn'
        onClick={() => setSelectedTrackId(null)}
      >
        Reset
      </button>

      <div className='layout'>
        <ul>
          {filteredTracks.map(track => {

            return (
              <li
                key={track.id}
                className={`track-card ${track.id === selectedTrackId
                  ? 'active'
                  : ''
                  }`}
                onClick={() => {
                  setSelectedTrackId(track.id)
                  // setSelectedTrack(track)
                }}
              >
                <div
                  style={{ cursor: 'pointer' }}
                  className='track-header'
                >
                  {track.title}
                </div>
                {track.artwork?.['150x150'] ? (
                  <img
                    src={track.artwork?.['150x150']}
                    alt={track.title}
                    className='track-thumb'
                  />
                ) : (
                  <div>No image</div>
                )}
              </li>
            )
          })}
        </ul>
        <div className='player-panel'>
          {selectedTrack ? (
            <>
              {selectedTrack.artwork?.['150x150'] && (
                <img
                  src={selectedTrack.artwork['150x150']}
                  alt={selectedTrack.title}
                  className='player-cover'
                />
              )}

              <h2>{selectedTrack.title}</h2>

              <audio
                controls
                className='player-audio'
                src={`https://api.audius.co/v1/tracks/${selectedTrack.id}/stream`}
              />
            </>
          ) : (
            <div className="empty-player">
              🎵
              <p>Select a track to start listening</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

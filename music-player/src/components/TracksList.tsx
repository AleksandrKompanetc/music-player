import { useState, useEffect } from 'react'
import { getTracks } from '../api/audius'

type Track = {
  id: string
  title: string
  artwork?: {
    '150x150'?: string
  }
  duration?: number
}

export function TracksList() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
      const fetchTracks = async () => {
  
        try {
          const tracks: Track[] = await getTracks()
          setTracks(tracks)
        } catch {
          // setError('Failed to load tracks')
        } finally {
          // setLoading(false)
        }
      }
      fetchTracks()
    }, [])

  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks!</span>
      </div>
    )
  }

    return (
      <ul>
        {tracks.map(track => {
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
                  {track.artwork?.['150x150'] && (
                    <img
                      src={track.artwork?.['150x150']}
                      alt={track.title}
                      className='track-thumb'
                    />
                  )}
                  <span>{track.title}</span>
                </div>
              </li>
            )
          })}
      </ul>
    )
}
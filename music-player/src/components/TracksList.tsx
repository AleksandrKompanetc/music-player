import { useState } from 'react'

export interface Track {
  id: string
  title: string
  artwork?: Record<string, string>
}

export function TracksList({tracks}: { tracks: Track[] }) {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  // useEffect(() => {
  //     const fetchTracks = async () => {
  
  //       try {
  //         const tracks: Track[] = await getTracks()
  //         setTracks(tracks)
  //       } catch {
  //         // setError('Failed to load tracks')
  //       } finally {
  //         // setLoading(false)
  //       }
  //     }
  //     fetchTracks()
  //   }, [])

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
                style={{ border: track.id === selectedTrackId ? '1px solid orange' : '' }}
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
import { useState } from 'react'
import { TrackItem } from './TrackItem'

export interface Track {
  id: string
  title: string
  artwork?: Record<string, string>
}

export function TracksList({ tracks }: { tracks: Track[] }) {
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
          <TrackItem />
        )
      })}
    </ul>
  )
}
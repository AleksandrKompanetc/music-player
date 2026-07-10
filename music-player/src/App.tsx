import './App.css'
import { useState, useEffect } from 'react'

export function App() {
  const [tracks, setTracks] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.audius.co/v1/tracks/search?query=Imagine', {
      headers: {
        'api-key': '0xe8a8068a78892896d1451820fb33bd92f651fc4f'
      }
    }).then(res => res.json())
      .then(json => setTracks(json.data))
  }, [])

  if (tracks === null) {
    return <div>
      <h1>Music Player</h1>
      <span>Loading...</span>
    </div>
  }

  if (tracks.length === 0) {
    return <div>
      <h1>Music Player</h1>
      <span>No tracks</span>
    </div>
  }

  // let selectedTrack = tracks.find(track => track.id === selectedTrackId)

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}>Reset selection</button>
      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        <ul>
          {tracks.map(track => {

            return (
              <li key={track.id} style={{ border: track.id === selectedTrackId ? '1px solid blue' : 'none' }}>
                <div onClick={() => {
                  setSelectedTrackId(track.id)

                  fetch('https://api.audius.co/v1/tracks/search?query=Imagine' + track.id, {
                    headers: {
                      'api-key': '0xe8a8068a78892896d1451820fb33bd92f651fc4f'
                    }
                  }).then(res => res.json())
                    .then(json => setSelectedTrack(json.data))
                }}>
                  {track.title}
                </div>
                <audio src={track.url} controls></audio>
              </li>
            )
          })}
        </ul>
        <div>
          {selectedTrack === null 
            ? 'Track is not selected' 
            : selectedTrack.track.title}
        </div>
      </div>
    </div>
  )
}

export default App

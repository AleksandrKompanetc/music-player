import './App.css'
import { useState, useEffect } from 'react'

export function App() {
  const [tracks, setTracks] = useState([
    { id: '1', title: 'Musicfun soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
    { id: '2', isSelected: true, title: 'Musicfun soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
    { id: '3', title: 'Musicfun track', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
    { id: '4', title: 'Musicfun sound', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' }
  ])
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  // useEffect(() => {
  //   fetch('https://musicfun.it-incubator.app/api/tracks', {
  //     headers: {
  //       'api-key': 'fbvhf-jvfh-fbvh-vfkk-jfffbvk'
  //     }
  //   }).then(res => res.json())
  //     .then(json => setTracks(json.data))
  // })

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

                  fetch('https://musicfun.it-incubator.app/api/tracks/' + track.id, {
                    headers: {
                      'api-key': 'fbvhf-jvfh-fbvh-vfkk-jfffbvk'
                    }
                  }).then(res => res.json())
                    .then(json => setTracks(json.data))

                  setSelectedTrack(track)
                }}>
                  {track.title}
                </div>
                <audio src={track.url} controls></audio>
              </li>
            )
          })}
        </ul>
        <div>
          {selectedTrackId === null ? 'Track is not selected' : selectedTrack?.title}
        </div>
      </div>
    </div>
  )
}

export default App

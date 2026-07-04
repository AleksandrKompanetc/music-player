import './App.css'
import { useState, useEffect } from 'react'

export function App() {
  const [tracks, setTracks] = useState([
    {id: '1', title: 'Musicfun soundtrack', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '2', isSelected: true, title: 'Musicfun soundtrack instrumental', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '3', title: 'Musicfun track', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '4', title: 'Musicfun sound', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'}
  ])
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/tracks', {
      headers: {
        'api-key' : 'fbvhf-jvfh-fbvh-vfkk-jfffbvk'
      }
    }).then(res => res.json())
      .then(json => setTracks(json.data))
  })

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

  return (
    <div>
      <h1>Music Player</h1>
      <button onClick={() => setSelectedTrackId(null)}>Reset selection</button>
      <ul>
        {tracks.map( track => (
          <li key={track.id} style={{ border: t.id === selectedTrackId ? '1px solid blue' : 'none'}}>
            <div onClick={() => {
              setSelectedTrackId(track.id)
            }}>
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

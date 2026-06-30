import './App.css'
import { useState } from 'react'

const tracks = [
    {id: '1', title: 'Musicfun soundtrack', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '2', isSelected: true, title: 'Musicfun soundtrack instrumental', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '3', title: 'Musicfun track', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '4', title: 'Musicfun sound', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'}
  ]

export function App() {

  const [selectedTrackId, setSelectedTrackId] = useState(null)

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
        {tracks.map( t => (
          <li key={t.id} style={{ border: t.id === selectedTrackId ? '1px solid blue' : 'none'}}>
            <div onClick={() => {
              setSelectedTrackId(t.id)
            }}>
              {t.title}
            </div>
            <audio src={t.src} controls></audio>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

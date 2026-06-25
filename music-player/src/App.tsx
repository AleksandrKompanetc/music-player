import './App.css'

function App() {
  
  const tracks = [
    {id: '1', title: 'Musicfun soundtrack', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {id: '2',title: 'Musicfun soundtrack instrumental', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'}
  ]

  return (
    <div>
      <h1>Music Player</h1>
      <ul>
        {tracks.map( t => (
          <li key={t.id}>
            <h2>{t.title}</h2>
            <audio src={t.src} controls></audio>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

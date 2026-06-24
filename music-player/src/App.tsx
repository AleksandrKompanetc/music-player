import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Music Player</h1>
      <ul>
        <li>
          <div>Musicfun soundtrack</div>
          <audio src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" controls></audio>
        </li>
        <li>
          <div>Musicfun soundtrack install</div>
          <audio src="https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" controls></audio>
        </li>
      </ul>
    </div>
  )
}

export default App

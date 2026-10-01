import { useState, type FormEvent } from 'react'
import type { Track } from '../types'

interface AddTrackFormProps {
  onAdd: (newTrack: Track) => void
}

export default function AddTrackForm({ onAdd }: AddTrackFormProps) {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!title.trim() || !artist.trim() || !genre.trim()) return

    const newTrack: Track = {
      id: Date.now(),
      title: title.trim(),
      artist: artist.trim(),
      genre: genre.trim(),
      user: {
        name: artist.trim(),
      },
    }

    onAdd(newTrack)

    setTitle('')
    setArtist('')
    setGenre('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder='Artist'
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        placeholder='Genre'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type='submit'>Add track</button>
    </form>
  )
}
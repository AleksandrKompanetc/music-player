import { useState } from 'react'

export default function AddTrackForm() {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [genre, setGenre] = useState('')

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Title' />
      <input placeholder='Artist' />
      <input placeholder='Genre'/>
      <button 
        type='submit'
        onClick={}
      >
        Add track
      </button>
    </form>
  )

}
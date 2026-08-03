import { useState } from 'react'

export default function TrackItem() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

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
}
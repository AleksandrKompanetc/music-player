import type { Track } from './TracksList'

type TrackItemProps = {
  track: Track
  selected: boolean
  onSelect: (id: string) => void
}

export default function TrackItem({
  track,
  selected,
  onSelect,
}: TrackItemProps) {
  return (
    <li
      onClick={() => onSelect(track.id)}
      style={{
        border: selected ? '2px solid orange' : 'none',
        cursor: 'pointer',
      }}
    >
      <div className="track-header">
        {track.artwork?.['150x150'] && (
          <img
            src={track.artwork['150x150']}
            alt={track.title}
            className="track-thumb"
          />
        )}

        <span>{track.title}</span>
      </div>
    </li>
  )
}
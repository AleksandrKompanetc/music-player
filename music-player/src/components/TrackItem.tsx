import type { Track } from '../types'

interface TrackItemProps {
  track: Track
  isSelected: boolean
  onSelect: () => void
}

const formatDuration = (seconds: number): string => {
  const min = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${min}:${secs.toString().padStart(2, '0')}`
}

export default function TrackItem({ track, isSelected, onSelect }: TrackItemProps) {
  const imageUrl = track.artwork?.['150x150'] || 'https://picsum.photos/seed/${track.id}/50/50'
  return (
    <li
      key={track.id}
      onClick={onSelect}
      className={`track-item ${isSelected ? 'selected' : ''}`}
      style={{
        border: isSelected ? '2px solid orange' : 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        listStyle: 'none'
      }}
    >
      <img
        src={imageUrl}
        alt={track.title}
        className='track-item-image'
        loading='lazy'
      />
      <div className='track-item-content'>
        <h3 className='track-item-title'>{track.title}</h3>
        <p 
          className='track-item-preview' 
          style={{ fontSize: '0.9em', fontStyle: 'italic' }}
        >
          {track.description}
          {track.body.slice(0, 80)}
        </p>
      </div>
    </li>
  )
}












// import type { Track } from './TracksList'

// type TrackItemProps = {
//   track: Track
//   selected: boolean
//   onSelect: (id: string) => void
// }

// export default function TrackItem({
//   track,
//   selected,
//   onSelect,
// }: TrackItemProps) {
//   return (
//     <li
//       onClick={() => onSelect(track.id)}
//       style={{
//         border: selected ? '2px solid orange' : 'none',
//         cursor: 'pointer',
//       }}
//     >
//       <div className="track-header">
//         {track.artwork?.['150x150'] && (
//           <img
//             src={track.artwork['150x150']}
//             alt={track.title}
//             className="track-thumb"
//           />
//         )}

//         <span>{track.title}</span>
//       </div>
//     </li>
//   )
// }
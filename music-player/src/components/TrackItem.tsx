type TrackItemProps = {
  track: Track
}

export type Track = {
  id: string
  title: string
  artwork?: {
    '150x150'?: string
  }
  description?: string
  isSelected?: boolean
  onSelect?: (id: string) => void
}

export default function TrackItem({ track, isSelected, onSelect }: TrackItemProps) {
  return (
    <li 
      key={track.id}
      onClick={() => onSelect(track.id)}
      className={`track-item ${isSelected ? 'selected' : ''}`}
    >
      <p>{track.title}</p>
      <p style={{ fontSize: '0.9em', fontStyle: 'italic'}}>{track.description}</p>
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
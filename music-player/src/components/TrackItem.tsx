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
}



export default function TrackItem({ track }: TrackItemProps) {
  return (
    <li 
      key={track.id}
      style={{ cursor: 'pointer', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '5px', listStyle: 'none' }}
      onClick={handleTrackClick}
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
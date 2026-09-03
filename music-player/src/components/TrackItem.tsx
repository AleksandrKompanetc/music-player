import type { Track } from '../types'

interface TrackItemProps {
  track: Track
  isSelected: boolean
  onSelect: (track: Track) => void
}

export default function TrackItem({
  track,
  isSelected,
  onSelect,
 }: TrackItemProps) {
  const cover = track.artwork?.['150x150'] || track.artwork?.['480x480']

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div
      className={`track-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(track)}
    >
      <img 
        src={cover || `https://picsum.photos/seed/${track.id}/150/150`}
        alt={track.title}
        className='track-cover'
      />
      <div className='track-info'>
        <div className='track-title'>{track.title}</div>
        <div className='track-artist'>{track.user?.name || 'Unknown Artist'}</div>
      </div>
      <div className='track-duration'>{formatDuration(track.duration)}</div>
    </div>
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
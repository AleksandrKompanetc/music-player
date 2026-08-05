export default function TracksList({props}) {
  return (
    <ul>
      {props.tracks.map(track => (
        <li key={track.id}>{track.title}</li>
      ))}
    </ul>
  )
}
import TrackItem from './TrackItem'

export default function TracksList({ props }}) {
  return (
    <ul>
      {props.tracks.map(track => (
        <TrackItem track={track} />
      ))}
    </ul>
  )
}
type TracksListProps = {
  tracks: Track[]
  selectedTrackId: string | null
  onSelect: (id: string) => void
}

export function TracksList({
  tracks,
  selectedTrackId,
  onSelect,
}: TracksListProps) {
  return (
    <ul>
      {tracks.map(track => (
        <TrackItem
          key={track.id}
          track={track}
          selected={track.id === selectedTrackId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}
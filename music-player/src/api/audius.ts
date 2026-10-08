export const getTracks = async (query = 'Imagine') => {
  const response = await fetch(
    `https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}`,
    {
      headers: {
        'api-key': '0xe8a8068a78892896d1451820fb33bd92f651fc4f',
      },
    },
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch tracks: ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data?.data) ? data.data : []
}

// const fetchTracks = async () => {
  //   setLoading(true)
  //   setError(null)

  //   try {
  //     const tracks: Track[] = await getTracks()
  //     setTracks(tracks)
  //   } catch {
  //     setError('Failed to load tracks')
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  // fetchTracks()
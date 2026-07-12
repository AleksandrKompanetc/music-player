export const getTracks = async () => {
  const response = await fetch('https://api.audius.co/v1/tracks/search?query=Imagine', {
      headers: {
        'api-key': '0xe8a8068a78892896d1451820fb33bd92f651fc4f'
      }
    })
  const data = await response.json()
  return data.data
}
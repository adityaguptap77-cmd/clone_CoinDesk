export async function requestApi(path) {
  const response = await fetch(`/api/${path}`)

  if (!response.ok) {
    throw new Error(`Backend responded with ${response.status} for /api/${path}`)
  }

  return response.json()
}

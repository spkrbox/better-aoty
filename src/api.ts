import { Album } from './types'
import { normalizeAlbumName } from './utils'

export async function fetchAlbumData(artist: string, album: string): Promise<Album | null> {
    try {
        const normalizedAlbum = normalizeAlbumName(album)
        const apiUrl = `https://aoty.jwd.gg/album/?artist=${encodeURIComponent(
            artist
        )}&album=${encodeURIComponent(normalizedAlbum)}`

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)

        const response = await fetch(apiUrl, { signal: controller.signal })
        clearTimeout(timeoutId)

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }

        return response.json() as Promise<Album>
    } catch (error) {
        console.error('Error fetching album data:', error)
        return null
    }
}

export async function playTrack(trackName: string, artistName: string) {
    try {
        const query = `track:${trackName} artist:${artistName}`
        const searchResults = await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`
        )

        if (searchResults?.tracks?.items?.length > 0) {
            await Spicetify.Player.playUri(searchResults.tracks.items[0].uri)
            return true
        }

        const broaderQuery = `${trackName} ${artistName}`
        const broaderResults = await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
                broaderQuery
            )}&type=track&limit=1`
        )

        if (broaderResults?.tracks?.items?.length > 0) {
            await Spicetify.Player.playUri(broaderResults.tracks.items[0].uri)
            return true
        }

        return false
    } catch (error) {
        console.error('Error playing track:', error)
        return false
    }
}

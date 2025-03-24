import { fetchAlbumData } from './api'
import {
    createRatingButton,
    updateButtonWithRating,
    showButtonLoading,
    updateButtonWithAlbumData,
} from './button'
import { setCurrentlyPlayingTrack, updateCurrentlyPlayingTrack } from './ui'
import { CSS_STYLES } from './styles'

async function main() {
    while (!Spicetify?.showNotification) {
        await new Promise((resolve) => setTimeout(resolve, 100))
    }

    let currentLoadingAlbum = ''

    const { button, buttonEl, ratingText, popover } = createRatingButton()

    const style = document.createElement('style')
    style.textContent = CSS_STYLES
    document.head.appendChild(style)

    Spicetify.Player.addEventListener('songchange', async () => {
        const currentTrack = Spicetify.Player.data.item

        if (!currentTrack) {
            updateButtonWithRating(null, buttonEl, ratingText)
            return
        }

        const artist = currentTrack.metadata.artist_name
        const album = currentTrack.metadata.album_title

        if (!artist || !album) {
            updateButtonWithRating(null, buttonEl, ratingText)
            return
        }

        const albumIdentifier = `${artist}-${album}`
        currentLoadingAlbum = albumIdentifier

        try {
            showButtonLoading(buttonEl, ratingText)
            const albumData = await fetchAlbumData(artist, album)

            if (currentLoadingAlbum === albumIdentifier) {
                if (albumData && albumData.user_score) {
                    updateButtonWithAlbumData(albumData, buttonEl, ratingText, popover)
                    setCurrentlyPlayingTrack(currentTrack.metadata.title, artist)
                    updateCurrentlyPlayingTrack()
                } else {
                    updateButtonWithRating(null, buttonEl, ratingText)
                }
            }
        } catch (error) {
            console.error('Error processing album data:', error)
            if (currentLoadingAlbum === albumIdentifier) {
                updateButtonWithRating(null, buttonEl, ratingText)
            }
        }
    })

    if (Spicetify.Player.data.item) {
        Spicetify.Player.dispatchEvent(new Event('songchange'))
    }

    Spicetify.showNotification('AOTY plugin loaded!')
}

export default main

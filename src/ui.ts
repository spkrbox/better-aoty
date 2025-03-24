import { Album, UserReview } from './types'
import { getRatingColorBg } from './utils'
import { playTrack } from './api'

let currentlyPlayingTrackName = ''
let currentlyPlayingArtistName = ''

export function showPopover(popover: HTMLElement) {
    popover.style.display = 'block'
    setTimeout(() => {
        popover.style.opacity = '1'
        popover.style.transform = 'translateY(0) scale(1)'
    }, 10)
}

export function hidePopover(popover: HTMLElement) {
    popover.style.opacity = '0'
    popover.style.transform = 'translateY(10px) scale(0.98)'
    setTimeout(() => {
        popover.style.display = 'none'
    }, 300)
}

export function updateCurrentlyPlayingTrack() {
    const trackItems = document.querySelectorAll('.aoty-track')
    trackItems.forEach((trackItem) => {
        trackItem.classList.remove('playing')

        const trackTitle = trackItem.querySelector('.aoty-track-title')?.textContent || ''
        const artistName = document.querySelector('.aoty-artist')?.textContent || ''

        if (trackTitle === currentlyPlayingTrackName && artistName === currentlyPlayingArtistName) {
            trackItem.classList.add('playing')
        }
    })
}

export function createReviewElement(review: UserReview, type: 'user'): HTMLElement {
    const reviewEl = document.createElement('div')
    reviewEl.className = 'aoty-review'

    const reviewHeader = document.createElement('div')
    reviewHeader.className = 'aoty-review-header'

    const source = document.createElement('div')
    source.className = 'aoty-review-source'

    const sourceIcon = document.createElement('div')
    sourceIcon.className = 'aoty-source-icon'
    sourceIcon.textContent = review.author.charAt(0).toUpperCase()

    const authorText = document.createTextNode(review.author)
    source.appendChild(sourceIcon)
    source.appendChild(authorText)

    reviewHeader.appendChild(source)

    if (review.rating) {
        const ratingEl = document.createElement('div')
        ratingEl.className = 'aoty-review-rating'
        ratingEl.style.backgroundColor = getRatingColorBg(review.rating)
        ratingEl.textContent = Math.round(review.rating).toString()
        reviewHeader.appendChild(ratingEl)
    }

    const text = document.createElement('p')
    text.className = 'aoty-review-text'
    text.textContent = review.text

    reviewEl.appendChild(reviewHeader)
    reviewEl.appendChild(text)

    if (review.likes > 0) {
        const meta = document.createElement('div')
        meta.className = 'aoty-review-meta'

        const likes = document.createElement('div')
        likes.className = 'aoty-meta-item'
        likes.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01z"></path></svg> ${review.likes}`

        meta.appendChild(likes)
        reviewEl.appendChild(meta)
    }

    return reviewEl
}

export function updatePopoverContent(album: Album, popover: HTMLElement) {
    popover.innerHTML = ''

    const container = document.createElement('div')
    container.className = 'aoty-popover-content'
    popover.appendChild(container)

    const header = document.createElement('div')
    header.className = 'aoty-header'

    const albumCoverUrl = Spicetify.Player.data?.item?.metadata?.image_xlarge_url || ''

    const albumCover = document.createElement('div')
    albumCover.className = 'aoty-album-cover'
    if (albumCoverUrl) {
        albumCover.style.backgroundImage = `url(${albumCoverUrl})`
    }

    const infoContainer = document.createElement('div')
    infoContainer.className = 'aoty-info-container'

    const titleArea = document.createElement('div')
    titleArea.className = 'aoty-title-area'

    const title = document.createElement('h3')
    title.className = 'aoty-title'
    title.textContent = album.title
    titleArea.appendChild(title)

    const artist = document.createElement('p')
    artist.className = 'aoty-artist'
    artist.textContent = album.artist
    titleArea.appendChild(artist)

    // Add "Must Hear" badge below artist name if applicable
    if (album.is_must_hear) {
        const mustHearBadge = document.createElement('div')
        mustHearBadge.className = 'aoty-must-hear-badge'
        mustHearBadge.innerHTML =
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg> Must Hear'
        titleArea.appendChild(mustHearBadge)
    }

    infoContainer.appendChild(titleArea)

    if (album.user_score !== null && album.user_score !== undefined) {
        const ratingArea = document.createElement('div')
        ratingArea.className = 'aoty-rating-area'

        const score = document.createElement('div')
        score.className = 'aoty-score'
        score.textContent = Math.round(album.user_score).toString()
        ratingArea.appendChild(score)

        infoContainer.appendChild(ratingArea)
    }

    albumCover.appendChild(infoContainer)
    header.appendChild(albumCover)
    container.appendChild(header)

    // Create a compact tabs container
    const tabsContainer = document.createElement('div')
    tabsContainer.className = 'aoty-tabs-container'

    const tabs = document.createElement('div')
    tabs.className = 'aoty-tabs'

    // Reviews tab with counter
    const reviewsTab = document.createElement('div')
    reviewsTab.className = 'aoty-tab active'
    const reviewsCount = album.popular_reviews?.length || 0
    reviewsTab.textContent = `Reviews ${reviewsCount > 0 ? `(${reviewsCount})` : ''}`

    // Tracks tab with counter
    const tracksTab = document.createElement('div')
    tracksTab.className = 'aoty-tab'
    tracksTab.textContent = `Tracks (${album.tracks?.length || 0})`

    tabs.appendChild(reviewsTab)
    tabs.appendChild(tracksTab)
    tabsContainer.appendChild(tabs)
    container.appendChild(tabsContainer)

    const contentContainer = document.createElement('div')
    contentContainer.className = 'aoty-content-container'

    const reviewsContent = document.createElement('div')
    reviewsContent.className = 'aoty-tab-content active'

    const tracksContent = document.createElement('div')
    tracksContent.className = 'aoty-tab-content'

    const reviewsList = document.createElement('div')
    reviewsList.className = 'aoty-reviews-list'
    reviewsContent.appendChild(reviewsList)

    const tracksList = document.createElement('div')
    tracksList.className = 'aoty-tracks-list'
    tracksContent.appendChild(tracksList)

    // Add content sections to container
    contentContainer.appendChild(reviewsContent)
    contentContainer.appendChild(tracksContent)
    container.appendChild(contentContainer)

    if (album.popular_reviews && album.popular_reviews.length > 0) {
        album.popular_reviews.forEach((review) => {
            const reviewEl = createReviewElement(review, 'user')
            reviewsList.appendChild(reviewEl)
        })
    } else {
        const emptyState = document.createElement('div')
        emptyState.className = 'aoty-empty-state'
        emptyState.textContent = 'No user reviews available'
        reviewsList.appendChild(emptyState)
    }

    if (album.tracks && album.tracks.length > 0) {
        album.tracks.forEach((track) => {
            const trackEl = document.createElement('div')
            trackEl.className = 'aoty-track'

            if (
                track.title === currentlyPlayingTrackName &&
                album.artist === currentlyPlayingArtistName
            ) {
                trackEl.classList.add('playing')
            }

            const number = document.createElement('div')
            number.className = 'aoty-track-number'
            number.textContent = track.number.toString()

            const trackInfo = document.createElement('div')
            trackInfo.className = 'aoty-track-info'

            const title = document.createElement('div')
            title.className = 'aoty-track-title'
            title.textContent = track.title

            trackInfo.appendChild(title)

            if (track.featured_artists && track.featured_artists.length > 0) {
                const artists = document.createElement('div')
                artists.className = 'aoty-track-artists'
                artists.textContent = `feat. ${track.featured_artists.join(', ')}`
                trackInfo.appendChild(artists)
            }

            trackEl.appendChild(number)
            trackEl.appendChild(trackInfo)

            if (track.rating) {
                const rating = document.createElement('div')
                rating.className = 'aoty-track-rating'
                rating.style.backgroundColor = getRatingColorBg(track.rating)
                rating.textContent = Math.round(track.rating).toString()
                trackEl.appendChild(rating)
            }

            const playButton = document.createElement('div')
            playButton.className = 'aoty-track-play'
            playButton.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>`

            playButton.addEventListener('click', (e) => {
                e.stopPropagation()

                handlePlayTrack(track.title, album.artist)
            })

            trackEl.appendChild(playButton)

            trackEl.addEventListener('click', () => {
                handlePlayTrack(track.title, album.artist)
            })

            tracksList.appendChild(trackEl)
        })
    } else {
        const emptyState = document.createElement('div')
        emptyState.className = 'aoty-empty-state'
        emptyState.textContent = 'No tracks available'
        tracksList.appendChild(emptyState)
    }

    if (album.user_score !== null && album.user_score !== undefined) {
        const meta = document.createElement('p')
        meta.className = 'aoty-meta'
        meta.textContent = `${Math.round(album.user_score)} / 100 · ${album.num_ratings} ratings`
        reviewsContent.appendChild(meta)
    }

    // Update tab click handlers
    reviewsTab.addEventListener('click', () => {
        reviewsTab.classList.add('active')
        tracksTab.classList.remove('active')
        reviewsContent.classList.add('active')
        tracksContent.classList.remove('active')
    })

    tracksTab.addEventListener('click', () => {
        tracksTab.classList.add('active')
        reviewsTab.classList.remove('active')
        tracksContent.classList.add('active')
        reviewsContent.classList.remove('active')
    })
}

export function setCurrentlyPlayingTrack(trackName: string, artistName: string) {
    currentlyPlayingTrackName = trackName
    currentlyPlayingArtistName = artistName
    updateCurrentlyPlayingTrack()
}

export function getCurrentlyPlayingTrack() {
    return {
        trackName: currentlyPlayingTrackName,
        artistName: currentlyPlayingArtistName,
    }
}

async function handlePlayTrack(trackName: string, artistName: string) {
    setCurrentlyPlayingTrack(trackName, artistName)

    const tracksTab = document.querySelector('.aoty-tab:nth-child(2)')
    const tracksContent = document.querySelector('.aoty-tab-content:nth-child(2)')
    const reviewsTab = document.querySelector('.aoty-tab:nth-child(1)')
    const reviewsContent = document.querySelector('.aoty-tab-content:nth-child(1)')

    if (tracksTab && tracksContent && reviewsTab && reviewsContent) {
        tracksTab.classList.add('active')
        tracksContent.classList.add('active')
        reviewsTab.classList.remove('active')
        reviewsContent.classList.remove('active')
    }

    await playTrack(trackName, artistName)
}

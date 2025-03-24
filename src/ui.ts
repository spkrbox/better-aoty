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
    source.textContent = review.author

    source.prepend(sourceIcon)
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

    text.textContent =
        review.text.length > 160 ? review.text.substring(0, 160) + '...' : review.text

    if (review.likes > 0) {
        const meta = document.createElement('div')
        meta.className = 'aoty-review-meta'

        const likes = document.createElement('div')
        likes.className = 'aoty-meta-item'
        likes.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01z"></path></svg> ${review.likes}`

        meta.appendChild(likes)
        reviewEl.appendChild(meta)
    }

    reviewEl.appendChild(reviewHeader)
    reviewEl.appendChild(text)

    return reviewEl
}

export function updatePopoverContent(album: Album, popover: HTMLElement) {
    popover.innerHTML = ''

    const container = document.createElement('div')
    container.className = 'aoty-popover-content'
    popover.appendChild(container)

    const header = document.createElement('div')
    header.className = 'aoty-header'

    if (album.user_score !== null && album.user_score !== undefined) {
        const score = document.createElement('div')
        score.className = 'aoty-header-score'
        score.style.backgroundColor = getRatingColorBg(album.user_score)
        score.textContent = Math.round(album.user_score).toString()
        header.appendChild(score)
    }

    const info = document.createElement('div')
    info.className = 'aoty-header-info'

    const title = document.createElement('h3')
    title.className = 'aoty-album-title'

    const titleText = document.createElement('span')
    titleText.className = 'aoty-album-title-text'
    titleText.textContent = album.title
    title.appendChild(titleText)

    if (album.is_must_hear) {
        const badge = document.createElement('div')
        badge.className = 'aoty-badge'

        const star = document.createElement('span')
        star.className = 'aoty-badge-star'
        star.textContent = '★'

        badge.appendChild(star)
        badge.appendChild(document.createTextNode('Must Hear'))

        title.appendChild(badge)
    }

    const artist = document.createElement('p')
    artist.className = 'aoty-artist'
    artist.textContent = album.artist

    info.appendChild(title)
    info.appendChild(artist)

    header.appendChild(info)
    container.appendChild(header)

    const tabs = document.createElement('div')
    tabs.className = 'aoty-tabs'

    const reviewsTab = document.createElement('div')
    reviewsTab.className = 'aoty-tab active'
    reviewsTab.textContent = 'Reviews'

    const tracksTab = document.createElement('div')
    tracksTab.className = 'aoty-tab'
    tracksTab.textContent = 'Tracks'

    tabs.appendChild(reviewsTab)
    tabs.appendChild(tracksTab)
    container.appendChild(tabs)

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
                rating.textContent = track.rating.toString()
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
        meta.textContent = `Overall rating of ${Math.round(album.user_score)} based on ${
            album.num_ratings
        } ratings`
        reviewsContent.appendChild(meta)
    }

    container.appendChild(reviewsContent)
    container.appendChild(tracksContent)

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

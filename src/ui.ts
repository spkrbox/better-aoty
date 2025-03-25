import { Album, UserReview } from './types'
import { getRatingColorBg } from './utils'
import { playTrack } from './api'

let currentlyPlayingTrackName = ''
let currentlyPlayingArtistName = ''
let isPinned = false
let escapeListener: ((e: KeyboardEvent) => void) | null = null

export function showPopover(popover: HTMLElement) {
    popover.style.display = 'block'
    setTimeout(() => {
        popover.style.opacity = '1'
        popover.style.transform = 'translateY(0) scale(1)'
    }, 10)

    if (!escapeListener) {
        escapeListener = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isPinned) {
                    isPinned = false
                    const pinButton = popover.querySelector('.aoty-pin-button')
                    if (pinButton) {
                        pinButton.classList.remove('active')
                    }
                }
                hidePopover(popover)
            }
        }
        document.addEventListener('keydown', escapeListener)
    }
}

export function hidePopover(popover: HTMLElement) {
    if (isPinned) return
    popover.style.opacity = '0'
    popover.style.transform = 'translateY(10px) scale(0.98)'
    setTimeout(() => {
        popover.style.display = 'none'
    }, 300)

    if (escapeListener) {
        document.removeEventListener('keydown', escapeListener)
        escapeListener = null
    }
}

export function togglePin() {
    isPinned = !isPinned
    return isPinned
}

export function isPinActive() {
    return isPinned
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

    if (review.profile_picture) {
        sourceIcon.style.backgroundImage = `url(${review.profile_picture})`
        sourceIcon.style.backgroundSize = 'cover'
        sourceIcon.style.backgroundPosition = 'center'
    } else {
        sourceIcon.textContent = review.author.charAt(0).toUpperCase()
    }

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
        likes.innerHTML = `<svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 14.25c-3.728 0-6.75-2.886-6.75-6.442 0-2.867 1.85-4.989 3.618-6.292C6.265.431 7.456 0 8 0c.544 0 1.735.43 3.132 1.516 1.767 1.303 3.618 3.425 3.618 6.292 0 3.556-3.022 6.442-6.75 6.442zM8 1c-.41 0-1.428.398-2.658 1.36C3.65 3.58 2.25 5.451 2.25 7.808c0 2.968 2.58 5.442 5.75 5.442s5.75-2.474 5.75-5.442c0-2.357-1.4-4.229-3.092-5.448C9.428 1.398 8.41 1 8 1z"></path><path d="M8 12.5c-2.42 0-4.5-2.019-4.5-4.5 0-1.855 1.09-3.409 2.304-4.394.71-.578 1.463-.98 2.196-.98.733 0 1.487.402 2.196.98C11.41 4.591 12.5 6.145 12.5 8c0 2.481-2.08 4.5-4.5 4.5zM8 3.626c-.507 0-1.134.324-1.743.823C5.243 5.319 4.5 6.603 4.5 8c0 1.897 1.607 3.5 3.5 3.5S11.5 9.897 11.5 8c0-1.397-.743-2.681-1.757-3.551-.609-.499-1.236-.823-1.743-.823z"></path><path d="M8 10.75c-1.533 0-2.75-1.173-2.75-2.75 0-.698.221-1.573.874-2.131.456-.39 1.072-.619 1.876-.619s1.42.229 1.876.619c.653.558.874 1.433.874 2.131 0 1.577-1.217 2.75-2.75 2.75zm0-4.5c-.604 0-1.028.153-1.322.4-.424.362-.428.983-.428 1.35 0 .994.808 1.75 1.75 1.75s1.75-.756 1.75-1.75c0-.367-.004-.988-.428-1.35-.294-.247-.718-.4-1.322-.4z"></path></svg> ${review.likes}`

        meta.appendChild(likes)
        reviewEl.appendChild(meta)
    }

    return reviewEl
}

export function updatePopoverContent(album: Album, popover: HTMLElement) {
    popover.innerHTML = ''

    const container = document.createElement('div')
    container.className = 'aoty-popover-content'

    const pinButton = document.createElement('button')
    pinButton.className = `aoty-pin-button${isPinActive() ? ' active' : ''}`
    pinButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z" /></svg>`
    pinButton.title = 'Keep popover open'
    pinButton.addEventListener('click', () => {
        const isPinned = togglePin()
        pinButton.classList.toggle('active', isPinned)
    })
    container.appendChild(pinButton)

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

    const tabsContainer = document.createElement('div')
    tabsContainer.className = 'aoty-tabs-container'

    const tabsWrapper = document.createElement('div')
    tabsWrapper.className = 'aoty-tabs-wrapper'

    const tabs = document.createElement('div')
    tabs.className = 'aoty-tabs'

    const reviewsTab = document.createElement('div')
    reviewsTab.className = 'aoty-tab active'
    const reviewsCount = album.popular_reviews?.length || 0
    reviewsTab.textContent = `Reviews ${reviewsCount > 0 ? `(${reviewsCount})` : ''}`

    const tracksTab = document.createElement('div')
    tracksTab.className = 'aoty-tab'
    tracksTab.textContent = `Tracks (${album.tracks?.length || 0})`

    tabs.appendChild(reviewsTab)
    tabs.appendChild(tracksTab)
    tabsWrapper.appendChild(tabs)
    tabsContainer.appendChild(tabsWrapper)
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

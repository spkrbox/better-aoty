import { Album } from './types'
import { getRatingColor } from './utils'
import { showPopover, hidePopover, updatePopoverContent } from './ui'

let currentRating: number | null = null
let isLoading = false

export function createRatingButton() {
    const aotButton = new Spicetify.Playbar.Button(
        '—',
        '',
        (self) => {
            if (currentRating && !isLoading) {
                if (!self.element.classList.contains('active')) {
                    showPopover(popover)
                    self.element.classList.add('active')
                } else {
                    hidePopover(popover)
                    self.element.classList.remove('active')
                }
            }
        },
        false,
        false
    )

    const buttonEl = aotButton.element
    buttonEl.style.fontWeight = 'bold'
    buttonEl.style.background = 'transparent'
    buttonEl.style.padding = '5px 8px'
    buttonEl.style.borderRadius = '4px'
    buttonEl.style.display = 'flex'
    buttonEl.style.alignItems = 'center'
    buttonEl.style.justifyContent = 'center'
    buttonEl.classList.add('aoty-button')

    const ratingText = document.createElement('span')
    ratingText.style.fontWeight = 'bold'
    ratingText.style.fontSize = '16px'
    ratingText.style.display = 'block'
    ratingText.style.lineHeight = '1'
    ratingText.style.padding = '0'
    ratingText.style.margin = '0'
    ratingText.style.whiteSpace = 'nowrap'
    ratingText.textContent = '—'

    buttonEl.innerHTML = ''
    buttonEl.appendChild(ratingText)
    aotButton.register()

    // Create popover element
    const popover = document.createElement('div')
    popover.id = 'aoty-popover'
    popover.style.position = 'absolute'
    popover.style.bottom = '110px'
    popover.style.right = '40px'
    popover.style.width = '300px'
    popover.style.maxHeight = '70vh'
    popover.style.backgroundColor = 'var(--background-base, var(--spice-main))'
    popover.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'
    popover.style.borderRadius = '8px'
    popover.style.padding = '0'
    popover.style.zIndex = '1000'
    popover.style.display = 'none'
    popover.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    popover.style.opacity = '0'
    popover.style.transform = 'translateY(10px) scale(0.98)'
    popover.style.overflow = 'hidden'

    document.body.appendChild(popover)

    document.addEventListener('click', (e) => {
        if (
            !popover.contains(e.target as Node) &&
            !(e.target as Element).closest('.aoty-button') &&
            popover.style.display === 'block'
        ) {
            hidePopover(popover)
            aotButton.element.classList.remove('active')
        }
    })

    return {
        button: aotButton,
        buttonEl,
        ratingText,
        popover,
    }
}

export function updateButtonWithRating(
    rating: number | null,
    buttonEl: HTMLElement,
    ratingText: HTMLElement
) {
    currentRating = rating
    isLoading = false

    if (rating === null) {
        buttonEl.style.display = 'none'
        return
    }

    buttonEl.style.display = 'flex'

    ratingText.textContent = Math.round(rating).toString()
    ratingText.style.color = getRatingColor(rating)
    ratingText.style.fontSize = '16px'

    buttonEl.style.minWidth = '32px'
    buttonEl.style.padding = '5px 10px'
    buttonEl.style.background = 'transparent'

    buttonEl.onmouseenter = null
    buttonEl.onmouseleave = null

    buttonEl.classList.add('rating-visible')
}

export function showButtonLoading(buttonEl: HTMLElement, ratingText: HTMLElement) {
    isLoading = true

    buttonEl.style.display = 'flex'

    ratingText.innerHTML = ''

    const spinner = document.createElement('div')
    spinner.className = 'aoty-spinner'

    ratingText.appendChild(spinner)

    buttonEl.style.minWidth = '32px'
    buttonEl.style.padding = '5px 10px'
    buttonEl.style.background = 'transparent'

    buttonEl.classList.add('rating-visible')
}

export function updateButtonWithAlbumData(
    albumData: Album | null,
    buttonEl: HTMLElement,
    ratingText: HTMLElement,
    popover: HTMLElement
) {
    if (albumData && albumData.user_score) {
        updateButtonWithRating(Math.round(albumData.user_score), buttonEl, ratingText)
        updatePopoverContent(albumData, popover)
    } else {
        updateButtonWithRating(null, buttonEl, ratingText)
    }
}

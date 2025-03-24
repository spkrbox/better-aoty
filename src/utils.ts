export function getRatingColor(rating: number): string {
    if (rating >= 70) return 'var(--spice-button-active)'
    if (rating >= 50) return 'var(--text-warning)'
    return 'var(--spice-notification-error)'
}

export function getRatingColorBg(rating: number): string {
    if (rating >= 70) return 'color-mix(in srgb, var(--spice-button-active) 30%, transparent)'
    if (rating >= 50) return 'color-mix(in srgb, var(--text-warning) 30%, transparent)'
    return 'color-mix(in srgb, var(--spice-notification-error) 30%, transparent)'
}

export function normalizeAlbumName(albumName: string): string {
    return albumName
        .replace(/\([^)]*\)/g, '')
        .replace(/\[[^\]]*\]/g, '')
        .trim()
}

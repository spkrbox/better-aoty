export interface Track {
    number: number
    title: string
    length: string
    rating?: number | null
    featured_artists: string[]
}

export interface CriticReview {
    author: string
    publication: string
    rating: number
    text: string
}

export interface UserReview {
    author: string
    rating?: number | null
    text: string
    likes: number
    profile_picture?: string
}

export interface BuyLink {
    platform: string
    url: string
}

export interface Album {
    title: string
    artist: string
    user_score?: number | null
    num_ratings: number
    tracks: Track[]
    critic_reviews: CriticReview[]
    popular_reviews: UserReview[]
    is_must_hear: boolean
    buy_links: BuyLink[]
}

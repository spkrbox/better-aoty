export const CSS_STYLES = `
    .aoty-popover-content {
        font-family: var(--font-family, inherit);
        height: 100%;
        display: flex;
        flex-direction: column;
        max-height: 70vh;
        border-radius: 8px;
        overflow: hidden;
    }

    .aoty-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(var(--spice-rgb-text), 0.3);
        border-radius: 50%;
        border-top-color: var(--spice-text);
        animation: aoty-spin 1s linear infinite;
    }

    @keyframes aoty-spin {
        to { transform: rotate(360deg); }
    }

    /* Compact header design */
    .aoty-header {
        border-radius: 0;
        overflow: hidden;
    }

    .aoty-album-cover {
        position: relative;
        width: 100%;
        height: 74px;
        background-size: cover;
        background-position: center;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    .aoty-album-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%);
    }

    .aoty-info-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        height: 100%;
        width: 100%;
    }

    .aoty-title-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 75%;
    }

    .aoty-must-hear-badge {
        display: inline-flex;
        align-items: center;
        background: rgba(var(--spice-rgb-button), 0.15);
        color: var(--spice-button);
        font-size: 9px;
        font-weight: 600;
        padding: 2px 5px;
        border-radius: 3px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 5px;
        width: fit-content;
        line-height: 1;
    }

    .aoty-must-hear-badge svg {
        margin-right: 3px;
        width: 8px;
        height: 8px;
    }

    .aoty-title {
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .aoty-artist {
        margin: 0;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.8);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .aoty-rating-area {
        display: flex;
        align-items: center;
    }

    .aoty-score {
        font-size: 24px;
        font-weight: 800;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    .aoty-tabs {
        display: flex;
        background: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0;
        margin: 10px 16px 0;
    }

    .aoty-tab {
        flex: 1;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        color: var(--spice-subtext);
        padding: 8px 0;
        cursor: pointer;
        transition: all 0.15s ease;
        position: relative;
        user-select: none;
    }

    .aoty-tab.active {
        color: var(--spice-text);
        position: relative;
    }

    .aoty-tab.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 25%;
        width: 50%;
        height: 2px;
        background: var(--spice-button);
    }

    .aoty-tabs-container {
        padding: 0 0 8px;
    }

    .aoty-content-container {
        position: relative;
        overflow: hidden;
        margin: 0;
        background: transparent;
    }

    .aoty-tab-content {
        flex: 1;
        overflow-y: auto;
        display: none;
        padding: 0;
        max-height: 280px;
        background: transparent;
    }

    .aoty-tab-content.active {
        display: block;
        animation: fadeIn 0.15s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .aoty-reviews-list,
    .aoty-tracks-list {
        padding: 10px 16px;
    }

    .aoty-review {
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .aoty-review:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }

    .aoty-review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    .aoty-review-source {
        font-size: 11px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--spice-subtext);
    }

    .aoty-source-icon {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
    }

    .aoty-review-rating {
        font-size: 12px;
        font-weight: 700;
        padding: 1px 6px;
        border-radius: 3px;
        min-width: 20px;
        text-align: center;
    }

    .aoty-review-text {
        font-size: 12px;
        line-height: 1.4;
        color: var(--spice-subtext);
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        opacity: 0.9;
    }

    .aoty-review-meta {
        margin-top: 6px;
        font-size: 10px;
        color: var(--spice-subtext);
        display: flex;
        align-items: center;
        gap: 6px;
        opacity: 0.7;
    }

    .aoty-meta {
        padding: 8px 16px;
        color: var(--spice-subtext);
        font-size: 10px;
        margin: 0;
        line-height: 1.4;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        opacity: 0.8;
        background: transparent;
    }

    .aoty-meta-item {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .aoty-tracks-list {
        padding: 0;
    }

    .aoty-track {
        display: flex;
        align-items: center;
        padding: 6px 0;
        transition: background 0.2s ease;
        cursor: pointer;
        margin-bottom: 1px;
    }

    .aoty-track:hover {
        background: transparent;
        opacity: 0.8;
    }

    .aoty-track.playing {
        background: transparent;
        position: relative;
        color: var(--spice-button);
    }

    .aoty-track.playing::before {
        content: '';
        position: absolute;
        left: -16px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--spice-button);
    }

    .aoty-track-number {
        width: 20px;
        font-size: 11px;
        color: var(--spice-subtext);
        text-align: center;
        opacity: 0.7;
    }

    .aoty-track-info {
        flex: 1;
        min-width: 0;
        padding: 0 8px;
    }

    .aoty-track-title {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .aoty-track-artists {
        font-size: 10px;
        color: var(--spice-subtext);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 1px;
        opacity: 0.7;
    }

    .aoty-track-rating {
        font-size: 10px;
        font-weight: bold;
        padding: 1px 4px;
        border-radius: 2px;
        min-width: 16px;
        text-align: center;
        margin-left: 4px;
    }

    .aoty-track-play {
        display: none;
    }

    .aoty-track:hover .aoty-track-play {
        display: none;
    }

    .aoty-track:hover .aoty-track-play:hover {
        display: none;
    }

    .aoty-empty-state {
        padding: 16px 0;
        color: var(--spice-subtext);
        font-size: 12px;
        opacity: 0.7;
    }
`

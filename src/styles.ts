export const CSS_STYLES = `
    .aoty-popover-content {
        font-family: var(--font-family, inherit);
        height: 100%;
        display: flex;
        flex-direction: column;
        max-height: 70vh;
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

    .aoty-header {
        padding: 16px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .aoty-header-score {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        margin-right: 12px;
        flex-shrink: 0;
    }

    .aoty-header-info {
        min-width: 0;
    }

    .aoty-album-title {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        align-items: center;
        gap: 6px;
        max-width: 180px;
    }

    .aoty-album-title-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
    }

    .aoty-badge {
        font-size: 10px;
        padding: 2px 4px;
        border-radius: 3px;
        color: var(--spice-text);
        background-color: transparent;
        border: 1px solid var(--spice-button);
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        height: 14px;
        line-height: 1;
    }

    .aoty-badge-star {
        color: var(--spice-button);
        margin-right: 3px;
        font-size: 9px;
    }

    .aoty-artist {
        margin: 4px 0 0 0;
        font-size: 13px;
        color: var(--spice-subtext);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .aoty-tabs {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .aoty-tab {
        padding: 14px 0;
        flex: 1;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
        color: var(--spice-subtext);
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    }

    .aoty-tab.active {
        color: var(--spice-text);
    }

    .aoty-tab.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 2px;
        background: var(--spice-button);
        border-radius: 2px;
    }

    .aoty-tab-content {
        flex: 1;
        overflow-y: auto;
        display: none;
        padding: 0;
    }

    .aoty-tab-content.active {
        display: block;
        animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .aoty-reviews-list,
    .aoty-tracks-list {
        padding: 16px;
    }

    .aoty-review {
        margin-bottom: 16px;
        padding-bottom: 16px;
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
        margin-bottom: 8px;
    }

    .aoty-review-source {
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .aoty-source-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
    }

    .aoty-review-rating {
        font-size: 13px;
        font-weight: bold;
        padding: 2px 8px;
        border-radius: 4px;
        min-width: 24px;
        text-align: center;
    }

    .aoty-review-text {
        font-size: 12px;
        line-height: 1.5;
        color: var(--spice-subtext);
        margin: 0;
    }

    .aoty-review-meta {
        margin-top: 8px;
        font-size: 11px;
        color: var(--spice-subtext);
        display: flex;
        align-items: center;
        gap: 8px;
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
        padding: 10px 16px;
        transition: background 0.2s ease;
        cursor: pointer;
    }

    .aoty-track:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .aoty-track.playing {
        background: rgba(var(--spice-rgb-button), 0.15);
        position: relative;
    }

    .aoty-track.playing::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--spice-button);
    }

    .aoty-track-number {
        width: 24px;
        font-size: 12px;
        color: var(--spice-subtext);
        text-align: center;
    }

    .aoty-track-info {
        flex: 1;
        min-width: 0;
        padding: 0 8px;
    }

    .aoty-track-title {
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .aoty-track-artists {
        font-size: 11px;
        color: var(--spice-subtext);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
    }

    .aoty-track-rating {
        margin-left: 8px;
        font-weight: bold;
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 4px;
        min-width: 20px;
        text-align: center;
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
        padding: 40px 16px;
        text-align: center;
        color: var(--spice-subtext);
        font-size: 13px;
    }

    .aoty-meta {
        padding: 12px 16px;
        color: var(--spice-subtext);
        font-size: 11px;
        margin: 0;
        line-height: 1.5;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
`

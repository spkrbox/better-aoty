(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(t=>setTimeout(t,10));var u,v,h,n,o,g,t;function x(t){return 70<=t?"color-mix(in srgb, var(--spice-button-active) 30%, transparent)":50<=t?"color-mix(in srgb, var(--text-warning) 30%, transparent)":"color-mix(in srgb, var(--spice-notification-error) 30%, transparent)"}function r(t){h||(t.style.opacity="0",t.style.transform="translateY(10px) scale(0.98)",setTimeout(()=>{t.style.display="none"},300),n&&(document.removeEventListener("keydown",n),n=null))}function b(){document.querySelectorAll(".aoty-track").forEach(t=>{t.classList.remove("playing");var e=(null==(e=t.querySelector(".aoty-track-title"))?void 0:e.textContent)||"",a=(null==(a=document.querySelector(".aoty-artist"))?void 0:a.textContent)||"";e===u&&a===v&&t.classList.add("playing")})}function f(o,t){t.innerHTML="";var e=document.createElement("div");e.className="aoty-popover-content";let a=document.createElement("button");a.className="aoty-pin-button"+(h?" active":""),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z" /></svg>',a.title="Keep popover open",a.addEventListener("click",()=>{var t=h=!h;a.classList.toggle("active",t)}),e.appendChild(a),t.appendChild(e);var t=document.createElement("div"),i=(t.className="aoty-header",(null==(i=null==(i=null==(i=Spicetify.Player.data)?void 0:i.item)?void 0:i.metadata)?void 0:i.image_xlarge_url)||""),n=document.createElement("div"),i=(n.className="aoty-album-cover",i&&(n.style.backgroundImage=`url(${i})`),document.createElement("div")),r=(i.className="aoty-info-container",document.createElement("div")),l=(r.className="aoty-title-area",document.createElement("h3")),l=(l.className="aoty-title",l.textContent=o.title,r.appendChild(l),document.createElement("p")),r=(l.className="aoty-artist",l.textContent=o.artist,r.appendChild(l),o.is_must_hear&&((l=document.createElement("div")).className="aoty-must-hear-badge",l.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg> Must Hear',r.appendChild(l)),i.appendChild(r),null!=o.user_score&&((l=document.createElement("div")).className="aoty-rating-area",(r=document.createElement("div")).className="aoty-score",r.textContent=Math.round(o.user_score).toString(),l.appendChild(r),i.appendChild(l)),n.appendChild(i),t.appendChild(n),e.appendChild(t),document.createElement("div")),l=(r.className="aoty-tabs-container",document.createElement("div")),i=(l.className="aoty-tabs-wrapper",document.createElement("div"));i.className="aoty-tabs";let s=document.createElement("div");s.className="aoty-tab active";t=(null==(n=o.popular_reviews)?void 0:n.length)||0;s.textContent="Reviews "+(0<t?`(${t})`:"");let c=document.createElement("div");c.className="aoty-tab",c.textContent=`Tracks (${(null==(n=o.tracks)?void 0:n.length)||0})`,i.appendChild(s),i.appendChild(c),l.appendChild(i),r.appendChild(l),e.appendChild(r);t=document.createElement("div");t.className="aoty-content-container";let d=document.createElement("div"),p=(d.className="aoty-tab-content active",document.createElement("div")),y=(p.className="aoty-tab-content",document.createElement("div")),m=(y.className="aoty-reviews-list",d.appendChild(y),document.createElement("div"));m.className="aoty-tracks-list",p.appendChild(m),t.appendChild(d),t.appendChild(p),e.appendChild(t),o.popular_reviews&&0<o.popular_reviews.length?o.popular_reviews.forEach(t=>{t=t,(e=document.createElement("div")).className="aoty-review",(o=document.createElement("div")).className="aoty-review-header",(a=document.createElement("div")).className="aoty-review-source",(i=document.createElement("div")).className="aoty-source-icon",t.profile_picture?(i.style.backgroundImage=`url(${t.profile_picture})`,i.style.backgroundSize="cover",i.style.backgroundPosition="center"):i.textContent=t.author.charAt(0).toUpperCase(),n=document.createTextNode(t.author),a.appendChild(i),a.appendChild(n),o.appendChild(a),t.rating&&((i=document.createElement("div")).className="aoty-review-rating",i.style.backgroundColor=x(t.rating),i.textContent=Math.round(t.rating).toString(),o.appendChild(i)),(n=document.createElement("p")).className="aoty-review-text",n.textContent=t.text,e.appendChild(o),e.appendChild(n),0<t.likes&&((a=document.createElement("div")).className="aoty-review-meta",(i=document.createElement("div")).className="aoty-meta-item",i.innerHTML='<svg viewBox="0 0 16 16" width="12" height="12"><path d="M8 14.25c-3.728 0-6.75-2.886-6.75-6.442 0-2.867 1.85-4.989 3.618-6.292C6.265.431 7.456 0 8 0c.544 0 1.735.43 3.132 1.516 1.767 1.303 3.618 3.425 3.618 6.292 0 3.556-3.022 6.442-6.75 6.442zM8 1c-.41 0-1.428.398-2.658 1.36C3.65 3.58 2.25 5.451 2.25 7.808c0 2.968 2.58 5.442 5.75 5.442s5.75-2.474 5.75-5.442c0-2.357-1.4-4.229-3.092-5.448C9.428 1.398 8.41 1 8 1z"></path><path d="M8 12.5c-2.42 0-4.5-2.019-4.5-4.5 0-1.855 1.09-3.409 2.304-4.394.71-.578 1.463-.98 2.196-.98.733 0 1.487.402 2.196.98C11.41 4.591 12.5 6.145 12.5 8c0 2.481-2.08 4.5-4.5 4.5zM8 3.626c-.507 0-1.134.324-1.743.823C5.243 5.319 4.5 6.603 4.5 8c0 1.897 1.607 3.5 3.5 3.5S11.5 9.897 11.5 8c0-1.397-.743-2.681-1.757-3.551-.609-.499-1.236-.823-1.743-.823z"></path><path d="M8 10.75c-1.533 0-2.75-1.173-2.75-2.75 0-.698.221-1.573.874-2.131.456-.39 1.072-.619 1.876-.619s1.42.229 1.876.619c.653.558.874 1.433.874 2.131 0 1.577-1.217 2.75-2.75 2.75zm0-4.5c-.604 0-1.028.153-1.322.4-.424.362-.428.983-.428 1.35 0 .994.808 1.75 1.75 1.75s1.75-.756 1.75-1.75c0-.367-.004-.988-.428-1.35-.294-.247-.718-.4-1.322-.4z"></path></svg> '+t.likes,a.appendChild(i),e.appendChild(a));var e,a,i,n,o=e;y.appendChild(o)}):((n=document.createElement("div")).className="aoty-empty-state",n.textContent="No user reviews available",y.appendChild(n)),o.tracks&&0<o.tracks.length?o.tracks.forEach(e=>{var t=document.createElement("div"),a=(t.className="aoty-track",e.title===u&&o.artist===v&&t.classList.add("playing"),document.createElement("div")),i=(a.className="aoty-track-number",a.textContent=e.number.toString(),document.createElement("div")),n=(i.className="aoty-track-info",document.createElement("div")),a=(n.className="aoty-track-title",n.textContent=e.title,i.appendChild(n),e.featured_artists&&0<e.featured_artists.length&&((n=document.createElement("div")).className="aoty-track-artists",n.textContent="feat. "+e.featured_artists.join(", "),i.appendChild(n)),t.appendChild(a),t.appendChild(i),e.rating&&((n=document.createElement("div")).className="aoty-track-rating",n.style.backgroundColor=x(e.rating),n.textContent=Math.round(e.rating).toString(),t.appendChild(n)),document.createElement("div"));a.className="aoty-track-play",a.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>',a.addEventListener("click",t=>{t.stopPropagation(),k(e.title,o.artist)}),t.appendChild(a),t.addEventListener("click",()=>{k(e.title,o.artist)}),m.appendChild(t)}):((i=document.createElement("div")).className="aoty-empty-state",i.textContent="No tracks available",m.appendChild(i)),s.addEventListener("click",()=>{s.classList.add("active"),c.classList.remove("active"),d.classList.add("active"),p.classList.remove("active")}),c.addEventListener("click",()=>{c.classList.add("active"),s.classList.remove("active"),p.classList.add("active"),d.classList.remove("active")})}function w(t,e){u=t,v=e,b()}async function k(t,e){w(t,e);var a,i,n,o,r=document.querySelector(".aoty-tab:nth-child(2)"),l=document.querySelector(".aoty-tab-content:nth-child(2)"),s=document.querySelector(".aoty-tab:nth-child(1)"),c=document.querySelector(".aoty-tab-content:nth-child(1)"),r=(r&&l&&s&&c&&(r.classList.add("active"),l.classList.add("active"),s.classList.remove("active"),c.classList.remove("active")),t),l=e;try{var d,p,y=`track:${r} artist:`+l,m=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(y)}&type=track&limit=1`);return void await(0<(null==(i=null==(a=null==m?void 0:m.tracks)?void 0:a.items)?void 0:i.length)?(await Spicetify.Player.playUri(m.tracks.items[0].uri),!0):(d=r+" "+l,0<(null==(o=null==(n=null==(p=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(d)}&type=track&limit=1`))?void 0:p.tracks)?void 0:n.items)?void 0:o.length)&&(await Spicetify.Player.playUri(p.tracks.items[0].uri),!0)))}catch(t){return void await(console.error("Error playing track:",t),!1)}}function e(){let e=new Spicetify.Playbar.Button("—","",t=>{var e;o&&!g&&(t.element.classList.contains("active")?(r(i),t.element.classList.remove("active")):((e=i).style.display="block",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0) scale(1)"},10),n||(n=t=>{"Escape"===t.key&&(h&&(h=!1,t=e.querySelector(".aoty-pin-button"))&&t.classList.remove("active"),r(e))},document.addEventListener("keydown",n)),t.element.classList.add("active")))},!1,!1);var t=e.element,a=(t.style.fontWeight="bold",t.style.background="transparent",t.style.padding="5px 8px",t.style.borderRadius="4px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.classList.add("aoty-button"),document.createElement("span"));a.style.fontWeight="bold",a.style.fontSize="16px",a.style.display="block",a.style.lineHeight="1",a.style.padding="0",a.style.margin="0",a.style.whiteSpace="nowrap",a.textContent="—",t.innerHTML="",t.appendChild(a),e.register();let i=document.createElement("div");return i.id="aoty-popover",i.style.position="absolute",i.style.bottom="110px",i.style.right="40px",i.style.width="300px",i.style.maxHeight="70vh",i.style.backgroundColor="var(--background-base, var(--spice-main))",i.style.boxShadow="0 8px 24px rgba(0, 0, 0, 0.15)",i.style.borderRadius="8px",i.style.padding="0",i.style.zIndex="1000",i.style.display="none",i.style.transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",i.style.opacity="0",i.style.transform="translateY(10px) scale(0.98)",i.style.overflow="hidden",document.body.appendChild(i),document.addEventListener("click",t=>{i.contains(t.target)||t.target.closest(".aoty-button")||"block"!==i.style.display||(r(i),e.element.classList.remove("active"))}),{button:e,buttonEl:t,ratingText:a,popover:i}}function C(t,e,a){g=!1,null===(o=t)?e.style.display="none":(e.style.display="flex",a.textContent=Math.round(t).toString(),a.style.color=70<=(t=t)?"var(--spice-button-active)":50<=t?"var(--text-warning)":"var(--spice-notification-error)",a.style.fontSize="16px",e.style.minWidth="32px",e.style.padding="5px 10px",e.style.background="transparent",e.onmouseenter=null,e.onmouseleave=null,e.classList.add("rating-visible"))}v=u="",o=n=null,g=h=!1,t=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(t=>setTimeout(t,100));let y,{buttonEl:m,ratingText:u,popover:v}=e();var t=document.createElement("style");t.textContent=`
    .aoty-popover-content {
        font-family: var(--font-family, inherit);
        height: 100%;
        display: flex;
        flex-direction: column;
        max-height: 70vh;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
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
        border-radius: 0;
        overflow: hidden;
    }

    .aoty-tabs-wrapper {
        display: flex;
        background: transparent;
        margin: 10px 16px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .aoty-tabs {
        display: flex;
        flex: 1;
    }

    .aoty-pin-button {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        background: var(--spice-card);
        border: none;
        width: 16px;
        height: 16px;
        padding: 2px;
        cursor: pointer;
        color: var(--spice-subtext);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 0 8px 0 6px;
        box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
        transform: translateX(12px);
        opacity: 0.3;
    }

    .aoty-pin-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -24px;
        width: 24px;
        height: 24px;
        background: transparent;
    }

    .aoty-popover-content:hover .aoty-pin-button,
    .aoty-pin-button:hover,
    .aoty-pin-button.active {
        transform: translateX(0);
        opacity: 1;
    }

    .aoty-pin-button:hover {
        color: var(--spice-text);
        background: var(--spice-highlight);
        width: 20px;
        height: 20px;
        padding: 4px;
    }

    .aoty-pin-button.active {
        color: var(--spice-button);
        background: var(--spice-highlight);
        width: 20px;
        height: 20px;
        padding: 4px;
    }

    .aoty-pin-button svg {
        width: 100%;
        height: 100%;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .aoty-pin-button::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 100%;
        background: var(--spice-card);
        opacity: 0.4;
        border-radius: 1px 0 0 1px;
        transform: translateX(-100%);
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .aoty-pin-button:hover::after,
    .aoty-pin-button.active::after {
        opacity: 0;
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
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
    }
`,document.head.appendChild(t),Spicetify.Player.addEventListener("songchange",async()=>{var t=Spicetify.Player.data.item;if(t){var e=t.metadata.artist_name,a=t.metadata.album_title;if(e&&a){var i,n,o,r,l,s,c,d=e+"-"+a;y=d;try{l=m,s=u,g=!0,l.style.display="flex",s.innerHTML="",(c=document.createElement("div")).className="aoty-spinner",s.appendChild(c),l.style.minWidth="32px",l.style.padding="5px 10px",l.style.background="transparent",l.classList.add("rating-visible");var p=await(async(e,a)=>{try{var i=a.replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").trim(),n=`https://aoty.jwd.gg/album/?artist=${encodeURIComponent(e)}&album=`+encodeURIComponent(i);let t=new AbortController;var o=setTimeout(()=>t.abort(),1e4),r=await fetch(n,{signal:t.signal});if(clearTimeout(o),r.ok)return r.json();throw new Error("API request failed with status "+r.status)}catch(t){return console.error("Error fetching album data:",t),null}})(e,a);y==d&&(p&&p.user_score?(i=p,n=m,o=u,r=v,i&&i.user_score?(C(Math.round(i.user_score),n,o),f(i,r)):C(null,n,o),w(t.metadata.title,e),b()):C(null,m,u))}catch(t){console.error("Error processing album data:",t),y==d&&C(null,m,u)}}else C(null,m,u)}else C(null,m,u)}),Spicetify.Player.data.item&&Spicetify.Player.dispatchEvent(new Event("songchange")),Spicetify.showNotification("AOTY plugin loaded!")},(async()=>{await t()})()})();
(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(t=>setTimeout(t,10));var y,u,n,g,t;function v(t){return 70<=t?"color-mix(in srgb, var(--spice-button-active) 30%, transparent)":50<=t?"color-mix(in srgb, var(--text-warning) 30%, transparent)":"color-mix(in srgb, var(--spice-notification-error) 30%, transparent)"}function o(t){t.style.opacity="0",t.style.transform="translateY(10px) scale(0.98)",setTimeout(()=>{t.style.display="none"},300)}function h(){document.querySelectorAll(".aoty-track").forEach(t=>{t.classList.remove("playing");var e=(null==(e=t.querySelector(".aoty-track-title"))?void 0:e.textContent)||"",a=(null==(a=document.querySelector(".aoty-artist"))?void 0:a.textContent)||"";e===y&&a===u&&t.classList.add("playing")})}function x(o,t){t.innerHTML="";var e=document.createElement("div"),t=(e.className="aoty-popover-content",t.appendChild(e),document.createElement("div")),a=(t.className="aoty-header",(null==(a=null==(a=null==(a=Spicetify.Player.data)?void 0:a.item)?void 0:a.metadata)?void 0:a.image_xlarge_url)||""),i=document.createElement("div"),a=(i.className="aoty-album-cover",a&&(i.style.backgroundImage=`url(${a})`),document.createElement("div")),n=(a.className="aoty-info-container",document.createElement("div")),r=(n.className="aoty-title-area",document.createElement("h3")),r=(r.className="aoty-title",r.textContent=o.title,n.appendChild(r),document.createElement("p")),n=(r.className="aoty-artist",r.textContent=o.artist,n.appendChild(r),o.is_must_hear&&((r=document.createElement("div")).className="aoty-must-hear-badge",r.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg> Must Hear',n.appendChild(r)),a.appendChild(n),null!=o.user_score&&((r=document.createElement("div")).className="aoty-rating-area",(n=document.createElement("div")).className="aoty-score",n.textContent=Math.round(o.user_score).toString(),r.appendChild(n),a.appendChild(r)),i.appendChild(a),t.appendChild(i),e.appendChild(t),document.createElement("div")),r=(n.className="aoty-tabs-container",document.createElement("div"));r.className="aoty-tabs";let s=document.createElement("div");s.className="aoty-tab active";i=(null==(a=o.popular_reviews)?void 0:a.length)||0;s.textContent="Reviews "+(0<i?`(${i})`:"");let l=document.createElement("div");l.className="aoty-tab",l.textContent=`Tracks (${(null==(t=o.tracks)?void 0:t.length)||0})`,r.appendChild(s),r.appendChild(l),n.appendChild(r),e.appendChild(n);a=document.createElement("div");a.className="aoty-content-container";let c=document.createElement("div"),d=(c.className="aoty-tab-content active",document.createElement("div")),p=(d.className="aoty-tab-content",document.createElement("div")),m=(p.className="aoty-reviews-list",c.appendChild(p),document.createElement("div"));m.className="aoty-tracks-list",d.appendChild(m),a.appendChild(c),a.appendChild(d),e.appendChild(a),o.popular_reviews&&0<o.popular_reviews.length?o.popular_reviews.forEach(t=>{t=t,(e=document.createElement("div")).className="aoty-review",(o=document.createElement("div")).className="aoty-review-header",(a=document.createElement("div")).className="aoty-review-source",(i=document.createElement("div")).className="aoty-source-icon",i.textContent=t.author.charAt(0).toUpperCase(),n=document.createTextNode(t.author),a.appendChild(i),a.appendChild(n),o.appendChild(a),t.rating&&((i=document.createElement("div")).className="aoty-review-rating",i.style.backgroundColor=v(t.rating),i.textContent=Math.round(t.rating).toString(),o.appendChild(i)),(n=document.createElement("p")).className="aoty-review-text",n.textContent=t.text,e.appendChild(o),e.appendChild(n),0<t.likes&&((a=document.createElement("div")).className="aoty-review-meta",(i=document.createElement("div")).className="aoty-meta-item",i.innerHTML='<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01z"></path></svg> '+t.likes,a.appendChild(i),e.appendChild(a));var e,a,i,n,o=e;p.appendChild(o)}):((i=document.createElement("div")).className="aoty-empty-state",i.textContent="No user reviews available",p.appendChild(i)),o.tracks&&0<o.tracks.length?o.tracks.forEach(e=>{var t=document.createElement("div"),a=(t.className="aoty-track",e.title===y&&o.artist===u&&t.classList.add("playing"),document.createElement("div")),i=(a.className="aoty-track-number",a.textContent=e.number.toString(),document.createElement("div")),n=(i.className="aoty-track-info",document.createElement("div")),a=(n.className="aoty-track-title",n.textContent=e.title,i.appendChild(n),e.featured_artists&&0<e.featured_artists.length&&((n=document.createElement("div")).className="aoty-track-artists",n.textContent="feat. "+e.featured_artists.join(", "),i.appendChild(n)),t.appendChild(a),t.appendChild(i),e.rating&&((n=document.createElement("div")).className="aoty-track-rating",n.style.backgroundColor=v(e.rating),n.textContent=Math.round(e.rating).toString(),t.appendChild(n)),document.createElement("div"));a.className="aoty-track-play",a.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>',a.addEventListener("click",t=>{t.stopPropagation(),f(e.title,o.artist)}),t.appendChild(a),t.addEventListener("click",()=>{f(e.title,o.artist)}),m.appendChild(t)}):((t=document.createElement("div")).className="aoty-empty-state",t.textContent="No tracks available",m.appendChild(t)),null!=o.user_score&&((r=document.createElement("p")).className="aoty-meta",r.textContent=""+Math.round(o.user_score)+` / 100 · ${o.num_ratings} ratings`,c.appendChild(r)),s.addEventListener("click",()=>{s.classList.add("active"),l.classList.remove("active"),c.classList.add("active"),d.classList.remove("active")}),l.addEventListener("click",()=>{l.classList.add("active"),s.classList.remove("active"),d.classList.add("active"),c.classList.remove("active")})}function b(t,e){y=t,u=e,h()}async function f(t,e){b(t,e);var a,i,n,o,r=document.querySelector(".aoty-tab:nth-child(2)"),s=document.querySelector(".aoty-tab-content:nth-child(2)"),l=document.querySelector(".aoty-tab:nth-child(1)"),c=document.querySelector(".aoty-tab-content:nth-child(1)"),r=(r&&s&&l&&c&&(r.classList.add("active"),s.classList.add("active"),l.classList.remove("active"),c.classList.remove("active")),t),s=e;try{var d,p,m=`track:${r} artist:`+s,y=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(m)}&type=track&limit=1`);return void await(0<(null==(i=null==(a=null==y?void 0:y.tracks)?void 0:a.items)?void 0:i.length)?(await Spicetify.Player.playUri(y.tracks.items[0].uri),!0):(d=r+" "+s,0<(null==(o=null==(n=null==(p=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(d)}&type=track&limit=1`))?void 0:p.tracks)?void 0:n.items)?void 0:o.length)&&(await Spicetify.Player.playUri(p.tracks.items[0].uri),!0)))}catch(t){return void await(console.error("Error playing track:",t),!1)}}function e(){let e=new Spicetify.Playbar.Button("—","",t=>{var e;n&&!g&&(t.element.classList.contains("active")?(o(i),t.element.classList.remove("active")):((e=i).style.display="block",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0) scale(1)"},10),t.element.classList.add("active")))},!1,!1);var t=e.element,a=(t.style.fontWeight="bold",t.style.background="transparent",t.style.padding="5px 8px",t.style.borderRadius="4px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.classList.add("aoty-button"),document.createElement("span"));a.style.fontWeight="bold",a.style.fontSize="16px",a.style.display="block",a.style.lineHeight="1",a.style.padding="0",a.style.margin="0",a.style.whiteSpace="nowrap",a.textContent="—",t.innerHTML="",t.appendChild(a),e.register();let i=document.createElement("div");return i.id="aoty-popover",i.style.position="absolute",i.style.bottom="110px",i.style.right="40px",i.style.width="300px",i.style.maxHeight="70vh",i.style.backgroundColor="var(--background-base, var(--spice-main))",i.style.boxShadow="0 8px 24px rgba(0, 0, 0, 0.15)",i.style.borderRadius="8px",i.style.padding="0",i.style.zIndex="1000",i.style.display="none",i.style.transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",i.style.opacity="0",i.style.transform="translateY(10px) scale(0.98)",i.style.overflow="hidden",document.body.appendChild(i),document.addEventListener("click",t=>{i.contains(t.target)||t.target.closest(".aoty-button")||"block"!==i.style.display||(o(i),e.element.classList.remove("active"))}),{button:e,buttonEl:t,ratingText:a,popover:i}}function w(t,e,a){g=!1,null===(n=t)?e.style.display="none":(e.style.display="flex",a.textContent=Math.round(t).toString(),a.style.color=70<=(t=t)?"var(--spice-button-active)":50<=t?"var(--text-warning)":"var(--spice-notification-error)",a.style.fontSize="16px",e.style.minWidth="32px",e.style.padding="5px 10px",e.style.background="transparent",e.onmouseenter=null,e.onmouseleave=null,e.classList.add("rating-visible"))}u=y="",n=null,g=!1,t=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(t=>setTimeout(t,100));let m,{buttonEl:y,ratingText:u,popover:v}=e();var t=document.createElement("style");t.textContent=`
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
`,document.head.appendChild(t),Spicetify.Player.addEventListener("songchange",async()=>{var t=Spicetify.Player.data.item;if(t){var e=t.metadata.artist_name,a=t.metadata.album_title;if(e&&a){var i,n,o,r,s,l,c,d=e+"-"+a;m=d;try{s=y,l=u,g=!0,s.style.display="flex",l.innerHTML="",(c=document.createElement("div")).className="aoty-spinner",l.appendChild(c),s.style.minWidth="32px",s.style.padding="5px 10px",s.style.background="transparent",s.classList.add("rating-visible");var p=await(async(e,a)=>{try{var i=a.replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").trim(),n=`https://aoty.jwd.gg/album/?artist=${encodeURIComponent(e)}&album=`+encodeURIComponent(i);let t=new AbortController;var o=setTimeout(()=>t.abort(),1e4),r=await fetch(n,{signal:t.signal});if(clearTimeout(o),r.ok)return r.json();throw new Error("API request failed with status "+r.status)}catch(t){return console.error("Error fetching album data:",t),null}})(e,a);m==d&&(p&&p.user_score?(i=p,n=y,o=u,r=v,i&&i.user_score?(w(Math.round(i.user_score),n,o),x(i,r)):w(null,n,o),b(t.metadata.title,e),h()):w(null,y,u))}catch(t){console.error("Error processing album data:",t),m==d&&w(null,y,u)}}else w(null,y,u)}else w(null,y,u)}),Spicetify.Player.data.item&&Spicetify.Player.dispatchEvent(new Event("songchange")),Spicetify.showNotification("AOTY plugin loaded!")},(async()=>{await t()})()})();
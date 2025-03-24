(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(t=>setTimeout(t,10));var y,u,n,x,t;function v(t){return 70<=t?"color-mix(in srgb, var(--spice-button-active) 30%, transparent)":50<=t?"color-mix(in srgb, var(--text-warning) 30%, transparent)":"color-mix(in srgb, var(--spice-notification-error) 30%, transparent)"}function o(t){t.style.opacity="0",t.style.transform="translateY(10px) scale(0.98)",setTimeout(()=>{t.style.display="none"},300)}function h(){document.querySelectorAll(".aoty-track").forEach(t=>{t.classList.remove("playing");var e=(null==(e=t.querySelector(".aoty-track-title"))?void 0:e.textContent)||"",a=(null==(a=document.querySelector(".aoty-artist"))?void 0:a.textContent)||"";e===y&&a===u&&t.classList.add("playing")})}function g(o,t){t.innerHTML="";var e=document.createElement("div"),t=(e.className="aoty-popover-content",t.appendChild(e),document.createElement("div")),a=(t.className="aoty-header",null!=o.user_score&&((a=document.createElement("div")).className="aoty-header-score",a.style.backgroundColor=v(o.user_score),a.textContent=Math.round(o.user_score).toString(),t.appendChild(a)),document.createElement("div")),i=(a.className="aoty-header-info",document.createElement("h3")),n=(i.className="aoty-album-title",document.createElement("span")),r=(n.className="aoty-album-title-text",n.textContent=o.title,i.appendChild(n),o.is_must_hear&&((n=document.createElement("div")).className="aoty-badge",(r=document.createElement("span")).className="aoty-badge-star",r.textContent="★",n.appendChild(r),n.appendChild(document.createTextNode("Must Hear")),i.appendChild(n)),document.createElement("p")),n=(r.className="aoty-artist",r.textContent=o.artist,a.appendChild(i),a.appendChild(r),t.appendChild(a),e.appendChild(t),document.createElement("div"));n.className="aoty-tabs";let s=document.createElement("div"),l=(s.className="aoty-tab active",s.textContent="Reviews",document.createElement("div")),c=(l.className="aoty-tab",l.textContent="Tracks",n.appendChild(s),n.appendChild(l),e.appendChild(n),document.createElement("div")),d=(c.className="aoty-tab-content active",document.createElement("div")),p=(d.className="aoty-tab-content",document.createElement("div")),m=(p.className="aoty-reviews-list",c.appendChild(p),document.createElement("div"));m.className="aoty-tracks-list",d.appendChild(m),o.popular_reviews&&0<o.popular_reviews.length?o.popular_reviews.forEach(t=>{t=t,(a=document.createElement("div")).className="aoty-review",(i=document.createElement("div")).className="aoty-review-header",(n=document.createElement("div")).className="aoty-review-source",(o=document.createElement("div")).className="aoty-source-icon",o.textContent=t.author.charAt(0).toUpperCase(),n.textContent=t.author,n.prepend(o),i.appendChild(n),t.rating&&((o=document.createElement("div")).className="aoty-review-rating",o.style.backgroundColor=v(t.rating),o.textContent=Math.round(t.rating).toString(),i.appendChild(o)),(n=document.createElement("p")).className="aoty-review-text",n.textContent=160<t.text.length?t.text.substring(0,160)+"...":t.text,0<t.likes&&((o=document.createElement("div")).className="aoty-review-meta",(e=document.createElement("div")).className="aoty-meta-item",e.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01z"></path></svg> '+t.likes,o.appendChild(e),a.appendChild(o)),a.appendChild(i),a.appendChild(n);var e,a,i,n,o,t=a;p.appendChild(t)}):((i=document.createElement("div")).className="aoty-empty-state",i.textContent="No user reviews available",p.appendChild(i)),o.tracks&&0<o.tracks.length?o.tracks.forEach(e=>{var t=document.createElement("div"),a=(t.className="aoty-track",e.title===y&&o.artist===u&&t.classList.add("playing"),document.createElement("div")),i=(a.className="aoty-track-number",a.textContent=e.number.toString(),document.createElement("div")),n=(i.className="aoty-track-info",document.createElement("div")),a=(n.className="aoty-track-title",n.textContent=e.title,i.appendChild(n),e.featured_artists&&0<e.featured_artists.length&&((n=document.createElement("div")).className="aoty-track-artists",n.textContent="feat. "+e.featured_artists.join(", "),i.appendChild(n)),t.appendChild(a),t.appendChild(i),e.rating&&((n=document.createElement("div")).className="aoty-track-rating",n.style.backgroundColor=v(e.rating),n.textContent=e.rating.toString(),t.appendChild(n)),document.createElement("div"));a.className="aoty-track-play",a.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>',a.addEventListener("click",t=>{t.stopPropagation(),f(e.title,o.artist)}),t.appendChild(a),t.addEventListener("click",()=>{f(e.title,o.artist)}),m.appendChild(t)}):((r=document.createElement("div")).className="aoty-empty-state",r.textContent="No tracks available",m.appendChild(r)),null!=o.user_score&&((a=document.createElement("p")).className="aoty-meta",a.textContent=`Overall rating of ${Math.round(o.user_score)} based on ${o.num_ratings} ratings`,c.appendChild(a)),e.appendChild(c),e.appendChild(d),s.addEventListener("click",()=>{s.classList.add("active"),l.classList.remove("active"),c.classList.add("active"),d.classList.remove("active")}),l.addEventListener("click",()=>{l.classList.add("active"),s.classList.remove("active"),d.classList.add("active"),c.classList.remove("active")})}function b(t,e){y=t,u=e,h()}async function f(t,e){b(t,e);var a,i,n,o,r=document.querySelector(".aoty-tab:nth-child(2)"),s=document.querySelector(".aoty-tab-content:nth-child(2)"),l=document.querySelector(".aoty-tab:nth-child(1)"),c=document.querySelector(".aoty-tab-content:nth-child(1)"),r=(r&&s&&l&&c&&(r.classList.add("active"),s.classList.add("active"),l.classList.remove("active"),c.classList.remove("active")),t),s=e;try{var d,p,m=`track:${r} artist:`+s,y=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(m)}&type=track&limit=1`);return void await(0<(null==(i=null==(a=null==y?void 0:y.tracks)?void 0:a.items)?void 0:i.length)?(await Spicetify.Player.playUri(y.tracks.items[0].uri),!0):(d=r+" "+s,0<(null==(o=null==(n=null==(p=await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(d)}&type=track&limit=1`))?void 0:p.tracks)?void 0:n.items)?void 0:o.length)&&(await Spicetify.Player.playUri(p.tracks.items[0].uri),!0)))}catch(t){return void await(console.error("Error playing track:",t),!1)}}function e(){let e=new Spicetify.Playbar.Button("—","",t=>{var e;n&&!x&&(t.element.classList.contains("active")?(o(i),t.element.classList.remove("active")):((e=i).style.display="block",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateY(0) scale(1)"},10),t.element.classList.add("active")))},!1,!1);var t=e.element,a=(t.style.fontWeight="bold",t.style.background="transparent",t.style.padding="5px 8px",t.style.borderRadius="4px",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.classList.add("aoty-button"),document.createElement("span"));a.style.fontWeight="bold",a.style.fontSize="16px",a.style.display="block",a.style.lineHeight="1",a.style.padding="0",a.style.margin="0",a.style.whiteSpace="nowrap",a.textContent="—",t.innerHTML="",t.appendChild(a),e.register();let i=document.createElement("div");return i.id="aoty-popover",i.style.position="absolute",i.style.bottom="110px",i.style.right="40px",i.style.width="300px",i.style.maxHeight="70vh",i.style.backgroundColor="var(--background-base, var(--spice-main))",i.style.boxShadow="0 8px 24px rgba(0, 0, 0, 0.15)",i.style.borderRadius="8px",i.style.padding="0",i.style.zIndex="1000",i.style.display="none",i.style.transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",i.style.opacity="0",i.style.transform="translateY(10px) scale(0.98)",i.style.overflow="hidden",document.body.appendChild(i),document.addEventListener("click",t=>{i.contains(t.target)||t.target.closest(".aoty-button")||"block"!==i.style.display||(o(i),e.element.classList.remove("active"))}),{button:e,buttonEl:t,ratingText:a,popover:i}}function w(t,e,a){x=!1,null===(n=t)?e.style.display="none":(e.style.display="flex",a.textContent=Math.round(t).toString(),a.style.color=70<=(t=t)?"var(--spice-button-active)":50<=t?"var(--text-warning)":"var(--spice-notification-error)",a.style.fontSize="16px",e.style.minWidth="32px",e.style.padding="5px 10px",e.style.background="transparent",e.onmouseenter=null,e.onmouseleave=null,e.classList.add("rating-visible"))}u=y="",n=null,x=!1,t=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(t=>setTimeout(t,100));let m,{buttonEl:y,ratingText:u,popover:v}=e();var t=document.createElement("style");t.textContent=`
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
`,document.head.appendChild(t),Spicetify.Player.addEventListener("songchange",async()=>{var t=Spicetify.Player.data.item;if(t){var e=t.metadata.artist_name,a=t.metadata.album_title;if(e&&a){var i,n,o,r,s,l,c,d=e+"-"+a;m=d;try{s=y,l=u,x=!0,s.style.display="flex",l.innerHTML="",(c=document.createElement("div")).className="aoty-spinner",l.appendChild(c),s.style.minWidth="32px",s.style.padding="5px 10px",s.style.background="transparent",s.classList.add("rating-visible");var p=await(async(e,a)=>{try{var i=a.replace(/\([^)]*\)/g,"").replace(/\[[^\]]*\]/g,"").trim(),n=`https://aoty.jwd.gg/album/?artist=${encodeURIComponent(e)}&album=`+encodeURIComponent(i);let t=new AbortController;var o=setTimeout(()=>t.abort(),1e4),r=await fetch(n,{signal:t.signal});if(clearTimeout(o),r.ok)return r.json();throw new Error("API request failed with status "+r.status)}catch(t){return console.error("Error fetching album data:",t),null}})(e,a);m==d&&(p&&p.user_score?(i=p,n=y,o=u,r=v,i&&i.user_score?(w(Math.round(i.user_score),n,o),g(i,r)):w(null,n,o),b(t.metadata.title,e),h()):w(null,y,u))}catch(t){console.error("Error processing album data:",t),m==d&&w(null,y,u)}}else w(null,y,u)}else w(null,y,u)}),Spicetify.Player.data.item&&Spicetify.Player.dispatchEvent(new Event("songchange")),Spicetify.showNotification("AOTY plugin loaded!")},(async()=>{await t()})()})();
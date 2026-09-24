import{a as f,S as p,i as l}from"./assets/vendor-CesYmgD5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function m(a){const s=new URLSearchParams({q:a,key:"19790179-de8e0f050de34d9c55fd8172a",image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?q=${s}`).then(({data:e})=>e.hits)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250,fadeSpeed:300,overlayOpacity:.9,closeOnOverlayClick:!0,captions:!0});function h(a){const s=a.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
              data-source="${e.largeImageURL}"
              data-tags="${e.tags}"
            />
          </a>
          <ul class="info-block">
            <li>
              <span>Likes</span>
              <span>${e.likes}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${e.views}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${e.comments}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${e.downloads}</span>
            </li>
          </ul>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",s),y.refresh()}function g(){u.innerHTML=""}function L(){d.classList.add("is-shown")}function b(){d.classList.remove("is-shown")}const c=document.querySelector('button[type="submit"]'),i=document.querySelector(".form");i.addEventListener("submit",a=>{a.preventDefault();const e=new FormData(i).get("search-text").trim();e&&(g(),L(),m(e).then(o=>{if(o.length===0){l.show({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o),i.reset(),c.disabled=!0}).catch(o=>l.error({color:"red",message:o.message,position:"topRight"})).finally(()=>{b(),c.disabled=!1}))});
//# sourceMappingURL=index.js.map

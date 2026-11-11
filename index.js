import{S as v,i as s}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function y(t,e=1){throw new Error("Missing VITE_PIXABAY_API_KEY. Add your Pixabay API key to the .env file.")}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more-button"),g=new v(".gallery-link",{captionsData:"alt",captionDelay:250});function h(t){return t.map(e=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                        />
                    </a>

                    <div class="gallery-info">
                        <p class="gallery-info-item">
                            <b>Likes</b>
                            ${e.likes}
                        </p>

                        <p class="gallery-info-item">
                            <b>Views</b>
                            ${e.views}
                        </p>

                        <p class="gallery-info-item">
                            <b>Comments</b>
                            ${e.comments}
                        </p>

                        <p class="gallery-info-item">
                            <b>Downloads</b>
                            ${e.downloads}
                        </p>
                    </div>
                </li>
            `).join("")}function S(t){u.innerHTML=h(t),g.refresh()}function q(t){u.insertAdjacentHTML("beforeend",h(t)),g.refresh()}function P(){u.innerHTML=""}function p(){f.classList.add("is-visible")}function b(){f.classList.remove("is-visible")}function L(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const E=document.querySelector(".form-input"),M=document.querySelector(".form"),I=document.querySelector(".load-more-button"),$=document.querySelector(".gallery");let l="",n=1,i=0;M.addEventListener("submit",async t=>{if(t.preventDefault(),l=E.value.trim(),l===""){s.error({title:"Error",message:"Please enter a search query!"});return}n=1,i=0,P(),w(),p();try{const e=await y(l,n);if(e.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}S(e.hits),i=e.hits.length,n+=1,i<e.totalHits?L():s.info({message:"We're sorry, but you've reached the end of search results."})}catch{s.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});I.addEventListener("click",async()=>{w(),p();try{const t=await y(l,n);q(t.hits),i+=t.hits.length,n+=1,i<t.totalHits?L():s.info({message:"We're sorry, but you've reached the end of search results."});const e=$.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{s.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map

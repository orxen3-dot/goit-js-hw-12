import{a as v,S,i as s}from"./assets/vendor-C1DvvBV_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const q="57502012-ee4b45b608b98ab265fc038c4",E="https://pixabay.com/api/";async function f(t,e=1){const a={page:e,per_page:15,key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await v.get(E,{params:a})).data}const d=document.querySelector(".gallery"),y=document.querySelector(".loader"),m=document.querySelector(".load-more-button"),g=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function h(t){return t.map(e=>`
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
            `).join("")}function M(t){d.innerHTML=h(t),g.refresh()}function P(t){d.insertAdjacentHTML("beforeend",h(t)),g.refresh()}function $(){d.innerHTML=""}function p(){y.classList.add("is-visible")}function b(){y.classList.remove("is-visible")}function L(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const B=document.querySelector(".form-input"),H=document.querySelector(".form"),I=document.querySelector(".load-more-button"),O=document.querySelector(".gallery");let l="",n=1,i=0;H.addEventListener("submit",async t=>{if(t.preventDefault(),l=B.value.trim(),l===""){s.error({title:"Error",message:"Please enter a search query!"});return}n=1,i=0,$(),w(),p();try{const e=await f(l,n);if(e.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}M(e.hits),i=e.hits.length,n+=1,i<e.totalHits?L():s.info({message:"We're sorry, but you've reached the end of search results."})}catch{s.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});I.addEventListener("click",async()=>{w(),p();try{const t=await f(l,n);P(t.hits),i+=t.hits.length,n+=1,i<t.totalHits?L():s.info({message:"We're sorry, but you've reached the end of search results."});const e=O.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{s.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map

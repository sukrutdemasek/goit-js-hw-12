import{a as g,S as f,i as l}from"./assets/vendor-0Fq3u7cb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const y="45177339-1086f924218083686626b70b0",L="https://pixabay.com/api/";async function p(t,s){const r=new URLSearchParams({key:y,q:t,image_type:"photo",orientation:"horizontal",perPage:15,page:s});try{return(await g.get(`${L}?${r}`)).data}catch(i){console.log(i)}}function h(t){let s=document.querySelector(".search-results"),r=new f(".search-results a"),i=t.hits.map(e=>`<div class="image-holder">
          <a href="${e.largeImageURL}">
            <img class="image" src="${e.webformatURL}" alt="${e.tags}">
          </a>
          <ul class="attributes-list">
            
            <li class="text-wrapper">
              <h4 class="image-likes">Likes</h4>
              <p class="image-number">${e.likes}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-views">Views</h4>
              <p class="image-number">${e.views}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-comments">Comments</h4>
              <p class="image-number">${e.comments}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-downloads">Downloads</h4>
              <p class="image-number">${e.downloads}</p>
            </li>
            
          </ul>
        </div>`).join("");s.insertAdjacentHTML("beforeend",i),r.refresh(),console.log("success")}function b(){let t=document.querySelector(".search-results");t.innerHTML=""}document.querySelector(".submit-button");const w=document.querySelector(".search-input"),v=document.querySelector(".input-form"),a=document.querySelector(".loader"),c=document.querySelector(".load-more-button");let u,n=1,S=15,m=0;v.addEventListener("submit",q);c.addEventListener("click",$);function q(t){t.preventDefault(),b(),a.classList.remove("hidden");let s=w.value.trim();if(s===""){l.error({position:"topRight",message:"Please fill the input"}),a.classList.add("hidden");return}u=s,n=1,p(u,n).then(r=>{if(r.totalHits===0){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hidden");return}m=Math.ceil(r.totalHits/S),h(r),a.classList.add("hidden"),n<m?c.classList.remove("hidden"):(c.classList.add("hidden"),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}).catch(r=>{l.error({position:"topRight",message:`An error occurred: ${r.message}`}),a.classList.add("hidden")})}function $(){n+=1,a.classList.remove("hidden"),p(u,n).then(t=>{h(t),a.classList.add("hidden"),R(),n>=m&&(c.classList.add("hidden"),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}).catch(t=>{l.error({position:"topRight",message:`An error occurred: ${t.message}`}),a.classList.add("hidden")})}function R(){const s=document.querySelector(".search-results").querySelectorAll(".image-holder");if(s.length>=2){const i=s[0].getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map

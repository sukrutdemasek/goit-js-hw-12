import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
export default function createGallery(data) {
  let galleryList = document.querySelector('.search-results');
  let gallery = new SimpleLightbox('.search-results a');
  let images = data.hits
    .map(
      hit =>
        `<div class="image-holder">
          <a href="${hit.largeImageURL}">
            <img class="image" src="${hit.webformatURL}" alt="${hit.tags}">
          </a>
          <ul class="attributes-list">
            
            <li class="text-wrapper">
              <h4 class="image-likes">Likes</h4>
              <p class="image-number">${hit.likes}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-views">Views</h4>
              <p class="image-number">${hit.views}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-comments">Comments</h4>
              <p class="image-number">${hit.comments}</p>
            </li>
            <li class="text-wrapper">
              <h4 class="image-downloads">Downloads</h4>
              <p class="image-number">${hit.downloads}</p>
            </li>
            
          </ul>
        </div>`
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', images);
  gallery.refresh();
  console.log('success');
}
export function clearGallery() {
  let galleryList = document.querySelector('.search-results');
  galleryList.innerHTML = '';
}

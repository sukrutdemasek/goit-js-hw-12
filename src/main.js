import searchImage from './js/pixabay-api';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import createGallery, { clearGallery } from './js/render-functions';

const button = document.querySelector('.submit-button');
const inputLine = document.querySelector('.search-input');
const inputForm = document.querySelector('.input-form');
const inputLoader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-button');

let inputValue;
let page = 1;
let limit = 15;
let totalPages = 0;

inputForm.addEventListener('submit', implementSubmit);
loadMoreButton.addEventListener('click', loadMoreImages);

function implementSubmit(event) {
  event.preventDefault();
  clearGallery();
  inputLoader.classList.remove('hidden');

  let queryWord = inputLine.value.trim();

  if (queryWord === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please fill the input',
    });
    inputLoader.classList.add('hidden');
    return;
  }

  inputValue = queryWord;
  page = 1;

  searchImage(inputValue, page)
    .then(data => {
      if (data.totalHits === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        inputLoader.classList.add('hidden');
        return;
      }

      totalPages = Math.ceil(data.totalHits / limit);
      createGallery(data);
      inputLoader.classList.add('hidden');

      if (page < totalPages) {
        loadMoreButton.classList.remove('hidden');
      } else {
        loadMoreButton.classList.add('hidden');
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `An error occurred: ${error.message}`,
      });
      inputLoader.classList.add('hidden');
    });
}

function loadMoreImages() {
  page += 1;
  inputLoader.classList.remove('hidden');

  searchImage(inputValue, page)
    .then(data => {
      createGallery(data);
      inputLoader.classList.add('hidden');

      scrollDownByTwoCards();

      if (page >= totalPages) {
        loadMoreButton.classList.add('hidden');
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `An error occurred: ${error.message}`,
      });
      inputLoader.classList.add('hidden');
    });
}

function scrollDownByTwoCards() {
  const galleryList = document.querySelector('.search-results');
  const cards = galleryList.querySelectorAll('.image-holder');

  if (cards.length >= 2) {
    const cardHeight = cards[0].getBoundingClientRect().height;
    const scrollAmount = cardHeight * 2;

    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  }
}

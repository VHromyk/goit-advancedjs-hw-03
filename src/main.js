import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-function.js';

import 'izitoast/dist/css/iziToast.min.css';

const submitButtonRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formRef);
  const searchQuery = formData.get('search-text').trim();

  if (!searchQuery) return;

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(images => {
      createGallery(images);
      formRef.reset();
    })
    .finally(() => {
      hideLoader();
    });
});

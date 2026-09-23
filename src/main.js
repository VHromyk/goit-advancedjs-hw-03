import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions.js';

import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

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
      if (images.length === 0) {
        iziToast.show({
          color: 'yellow',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      createGallery(images);
      formRef.reset();
      submitButtonRef.disabled = true;
    })
    .catch(error =>
      iziToast.error({
        color: 'red',
        message: error.message,
        position: 'topRight',
      })
    )
    .finally(() => {
      hideLoader();
      submitButtonRef.disabled = false;
    });
});

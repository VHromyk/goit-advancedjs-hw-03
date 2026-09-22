import axios from 'axios';
import iziToast from 'izitoast';

export function getImagesByQuery(query) {
  const searchQuery = new URLSearchParams({
    q: query,
    key: '19790179-de8e0f050de34d9c55fd8172a',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}`)
    .then(({ data }) => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'yellow',
        });
      }

      return data.hits;
    })
    .catch(error => console.log(error));
}

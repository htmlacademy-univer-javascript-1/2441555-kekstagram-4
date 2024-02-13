import { createPhotos } from './data.js';

const similarListElement = document.querySelector('.pictures');

const similarPhotos = createPhotos();
const photoTemplate = document.querySelector('#picture').content;

const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach((photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;

  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);

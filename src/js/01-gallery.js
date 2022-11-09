// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(`.gallery`);
const link = '${item.preview}';

const galleryMass = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
  )
  .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMass);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});

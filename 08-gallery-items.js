import cards from './gallery-items.js';
console.log(createGalleryMarkup(cards));

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkup(cards);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${preview}"
          >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li >
      `;

  }).join('');
  
}
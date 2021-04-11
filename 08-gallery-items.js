import cards from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),

};

const galleryMarkup = createGalleryMarkup(cards);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

refs.gallery.addEventListener('click', onCardOpen);

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

function onCardOpen(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(evt.target);
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = `${evt.target.dataset.source}`;
};
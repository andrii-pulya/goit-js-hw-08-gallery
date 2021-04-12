import cards from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeButton: document.querySelector('.lightbox__button'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
};

const galleryMarkup = createGalleryMarkup(cards);
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

refs.gallery.addEventListener('click', onCardOpen);
refs.lightbox.addEventListener('click', modalClose);
window.addEventListener('keydown', escModalClose);


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

function onCardOpen (evt) {
  evt.preventDefault();

  console.log(evt.target.nodeName);

  if (evt.target.nodeName !== 'IMG') {
    return
  }

  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = `${evt.target.dataset.source}`;
};

function modalClose (evt) {
  evt.preventDefault();
  
if (evt.target.nodeName === 'IMG') {
    return
  }
    refs.lightboxImage.src = '';
    refs.lightbox.classList.remove('is-open');
}

function escModalClose(evt) {
  evt.preventDefault();

  if (evt.key !== 'Escape') {
    return
  }
    refs.lightboxImage.src = '';
    refs.lightbox.classList.remove('is-open');
}
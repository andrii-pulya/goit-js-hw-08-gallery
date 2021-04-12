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

function modalClose(evt) {
  evt.preventDefault();
  // console.log(evt.target);
  
if (!evt.target.classList.contains('lightbox__button') || !evt.target.classList.contains('lightbox__overlay')) {
    return
  }
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = '';
}

// if (!evt.target.classList.contains('lightbox__overlay')) {
//     return
//   } else {

// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     alert('Отменить!')
//   }
// });
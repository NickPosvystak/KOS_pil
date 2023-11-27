import SimpleLightbox from 'simplelightbox';

// import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.main-box');

function renderGallery() {
  const createElement = galleryItems
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
    )
    .join('');

  galleryList.innerHTML = createElement;
}

renderGallery();

const lightbox = new SimpleLightbox('.main-box a', {
  captionDelay: '250',
  captionsData: 'alt',
});

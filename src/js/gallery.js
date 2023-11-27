import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Import your images
import img01 from '../images/img/02.jpg';
import img02 from '../images/img/03.jpg';
import img03 from '../images/img/03.jpg';
import img04 from '../images/img/04.jpg';
import img05 from '../images/img/05.jpg';
import img06 from '../images/img/06.jpg';
import img07 from '../images/img/07.jpg';
import img08 from '../images/img/08.jpg';
import img09 from '../images/img/09.jpg';
import img12 from '../images/img/12.jpg';

document.addEventListener('DOMContentLoaded', function () {
  // Use a different name for the array
  const galleryData = [
    { original: img01, preview: img01, description: 'Description 1' },
    { original: img02, preview: img02, description: 'Description 2' },
    { original: img03, preview: img03, description: 'Description 3' },
    { original: img04, preview: img04, description: 'Description 4' },
    { original: img05, preview: img05, description: 'Description 5' },
    { original: img06, preview: img06, description: 'Description 6' },
    { original: img07, preview: img07, description: 'Description 7' },
    { original: img08, preview: img08, description: 'Description 8' },
    { original: img09, preview: img09, description: 'Description 9' },
    { original: img12, preview: img12, description: 'Description 12' },
  ];

  const galleryList = document.querySelector('.gallery');
  galleryList.addEventListener('click', onClick);

  function renderGallery() {
    const galleryMarkup = galleryData
      .map(
        ({ preview, original, description }) => `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`
      )
      .join('');

    galleryList.innerHTML = galleryMarkup;
  }

  renderGallery();

  let instance = null;

  function onClick(event) {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName !== 'IMG') return;

    const source = event.target.dataset.source;

    instance = SimpleLightbox.open({
      items: [{ src: source }],
      onShow: () => {
        document.body.addEventListener('keydown', closeModalOnEsc);
      },
      onClose: () => {
        document.body.removeEventListener('keydown', closeModalOnEsc);
        instance = null;
      },
    });
  }

  function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
});

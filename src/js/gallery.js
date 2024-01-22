
import { galleryItems } from './gallery-items';
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onClick);
const loadMoreButton = document.getElementById('load-more');

let currentIndex = 0; // Initial index
const itemsPerPage = 2; // Number of items to load initially

const imgItems = ({ preview, original, description }) => {
  return `
   <li class="gallery__item">
           <a class="gallery__link" href="${original}">
               <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
               />
             </a>
           </li>
  `;
};
const render = (start, end) => {
  const galleryMarkup = galleryItems
    .slice(start, end)
    .map(item => imgItems(item));
  galleryList.innerHTML = galleryMarkup.join('');
};

// Initial render
render(0, itemsPerPage);

loadMoreButton.addEventListener('click', () => {
  currentIndex += itemsPerPage;
  render(currentIndex, currentIndex + itemsPerPage);
});

galleryList.addEventListener('click', onClick);



function onClick(event) {
  event.preventDefault();

  let instance = null;

  if (event.target.nodeName !== 'IMG') return;

  instance = basicLightbox.create(
    `
    <img src='${event.target.dataset.source}' width="800" height="600">
    `,
    {
      onShow: () => {
        document.body.addEventListener('keydown', onClose);
      },
    },
    {
      onClose: () => {
        document.body.removeEventListener('keydown', onClose);
        instance = null;
      },
    }
  );
  instance.show();
}

function onClose(event) {
  if (event.key === 'Escape') {
    instance.close();
  }
}

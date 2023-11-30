
import { galleryItems } from './gallery-items';
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onClick);

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
const render = galleryItems => {
  const galleryMarkup = galleryItems.map(item => imgItems(item));
  galleryList.innerHTML = galleryMarkup.join('');
};

render(galleryItems);

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

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const myGalleryUlEl = document.querySelector(".gallery");

const galleryMasses = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
                alt="${description}" />
      </a>
    </li>`
  )
  .join("");

  
myGalleryUlEl.innerHTML = galleryMasses;
  
myGalleryUlEl.addEventListener("click", onClick);


function onClick(e) {
    e.preventDefault();

   const lightbox = new SimpleLightbox(".gallery a", {
     sourceAttr: "href",
     captionDelay: 250,
     captionSelector: "img",
     captionsData: "alt",
   });

  lightbox.open();
 }



import { galleryItems } from "./gallery-items.js";

const myGalleryUlEl = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  )
  .join("");

myGalleryUlEl.innerHTML = galleryMarkup;


    lightbox = new SimpleLightbox(".gallery a", {
      sourceAttr: "href",
      captionDelay: 250,
      captionSelector: "img",
      captionsData: "alt",
    });
 
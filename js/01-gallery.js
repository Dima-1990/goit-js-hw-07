import { galleryItems } from "./gallery-items.js";
// Change code below this line

const myGalleryUlEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
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
  .join("");

myGalleryUlEl.innerHTML = galleryMarkup;
myGalleryUlEl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="100%" height="100%">`
  );
  instance.show();

  const closeHandler = ({ code }) => {
    if (code !== "Escape") {
      return;
    }

    instance.close();
    document.removeEventListener("keydown", closeHandler);
  };

  document.addEventListener("keydown", closeHandler);
}

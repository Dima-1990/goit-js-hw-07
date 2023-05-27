import { galleryItems } from './gallery-items.js';
// Change code below this line

//  console.log(galleryItems);

const myGalleryUlEl = document.querySelector(".gallery");

const galleryMasses = galleryItems.map(
    ({ original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");

myGalleryUlEl.innerHTML = galleryMasses;
myGalleryUlEl.addEventListener("click", onClick);
 

function onClick(e) {
  e.preventDefault();

    const instance = basicLightbox.create(`<img
      src="${e.target.dataset.source}" width="100%" height="100%">`);
    instance.show();


    let statusInstance = instance.visible();

    if (statusInstance) {
        document.addEventListener("keydown", ({code})=> {
              if (code !== "Escape") {
                  return
              }
            
              else {
                instance.close();
              }
        });
    }

}


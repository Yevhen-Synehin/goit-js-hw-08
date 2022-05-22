

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galeryContainer = document.querySelector(".gallery");

const galleryMarkUp = galleryItems
.map(item => {
const itemContainer = document.createElement("div");
itemContainer.classList.add("gallery__item");

const itemLink = document.createElement("a");
itemLink.classList.add("gallery__link");
itemLink.setAttribute("href", item.original);

const itemImg = document.createElement("img");
itemImg.classList.add("gallery__image");
itemImg.setAttribute("src", item.preview);
itemImg.setAttribute("data-source", item.original);
itemImg.setAttribute("alt", item.description);

itemLink.append(itemImg);
itemContainer.append(itemLink);

return itemContainer;
});

galeryContainer.append(...galleryMarkUp);

galeryContainer.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="1400" height="900">
    `);
    instance.show(() => document.addEventListener("keydown", onEscBtn));
    
    function onEscBtn(evt) {
        if (!instance.visible()) {
            return
        } else {
            if (evt.code === "Escape") {
                instance.close(() => document.removeEventListener("keydown", onEscBtn));
            };
        }
    };
};
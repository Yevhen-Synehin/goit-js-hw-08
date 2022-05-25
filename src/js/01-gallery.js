import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

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

const refs = {
    captionsData: "alt",
    captionDelay: 250
};

function onImageClick(evt) {
    evt.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', refs);
gallery.on('show.simplelightbox', function () {
});
galeryContainer.removeEventListener('click', onImageClick);
}
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreButton = document.querySelector(".load-more-button");

const lightbox = new SimpleLightbox(".gallery-link", {
    captionsData: "alt",
    captionDelay: 250,
});

function createMarkup(images) {
    return images
        .map(image => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${image.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${image.webformatURL}"
                            alt="${image.tags}"
                        />
                    </a>

                    <div class="gallery-info">
                        <p class="gallery-info-item">
                            <b>Likes</b>
                            ${image.likes}
                        </p>

                        <p class="gallery-info-item">
                            <b>Views</b>
                            ${image.views}
                        </p>

                        <p class="gallery-info-item">
                            <b>Comments</b>
                            ${image.comments}
                        </p>

                        <p class="gallery-info-item">
                            <b>Downloads</b>
                            ${image.downloads}
                        </p>
                    </div>
                </li>
            `;
        })
        .join("");
}

export function createGallery(images) {
    gallery.innerHTML = createMarkup(images);

    lightbox.refresh();
}

export function appendGallery(images) {
    gallery.insertAdjacentHTML("beforeend", createMarkup(images));

    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.add("is-visible");
}

export function hideLoader() {
    loader.classList.remove("is-visible");
}

export function showLoadMoreButton() {
    loadMoreButton.classList.remove("is-hidden");
}

export function hideLoadMoreButton() {
    loadMoreButton.classList.add("is-hidden");
}
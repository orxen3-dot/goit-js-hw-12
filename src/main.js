import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    appendGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions.js";

const input = document.querySelector(".form-input");
const form = document.querySelector(".form");
const loadMoreButton = document.querySelector(".load-more-button");
const gallery = document.querySelector(".gallery");

let query = "";
let page = 1;
let loadedImages = 0;

form.addEventListener("submit", async event => {
    event.preventDefault();

    query = input.value.trim();

    if (query === "") {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query!",
        });
        return;
    }

    page = 1;
    loadedImages = 0;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        if (data.hits.length === 0) {
            iziToast.error({
                title: "Error",
                message:
                    "Sorry, there are no images matching your search query. Please try again!",
            });

            return;
        }

        createGallery(data.hits);

        loadedImages = data.hits.length;
        page += 1;

        if (loadedImages < data.totalHits) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
            });
        }
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later.",
        });
    } finally {
        hideLoader();
    }
});

loadMoreButton.addEventListener("click", async () => {
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        appendGallery(data.hits);

        loadedImages += data.hits.length;
        page += 1;

        if (loadedImages < data.totalHits) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message:
                    "We're sorry, but you've reached the end of search results.",
            });
        }

        const galleryItem = gallery.querySelector(".gallery-item");

        if (galleryItem) {
            const cardHeight = galleryItem.getBoundingClientRect().height;

            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        }
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later.",
        });
    } finally {
        hideLoader();
    }
});
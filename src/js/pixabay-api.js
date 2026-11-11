import axios from "axios";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1) {
    if (!API_KEY) {
        throw new Error("Missing VITE_PIXABAY_API_KEY. Add your Pixabay API key to the .env file.");
    }

    const params = {
        page,
        per_page: 15,
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}

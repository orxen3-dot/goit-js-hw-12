import axios from "axios";

const API_KEY = "57502012-ee4b45b608b98ab265fc038c4";
const BASE_URL = "https://pixabay.com/api/";


export async function getImagesByQuery(query, page = 1) {

    const params = {
        page: page,
        per_page: 15,
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data

}


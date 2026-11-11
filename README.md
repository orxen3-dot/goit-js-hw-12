<div align="center">

# 📸 Image Search App

### Find photos. Explore results. Open images in a lightbox.

A responsive image search application built with **Vanilla JavaScript**, **Axios**, and the **Pixabay API**.

[GitHub Repository](https://github.com/orxen3-dot/goit-js-hw-12)

</div>

---

## ✨ About the Project

Image Search App lets users search for photos by keyword and browse matching results in a responsive gallery. Images are retrieved from the Pixabay API, while pagination allows users to load more results without starting a new search.

The project was built as part of the GoIT JavaScript course and focuses on asynchronous JavaScript, working with a REST API, DOM manipulation, and modular code organization.

## 🚀 Features

- **Image search** by keyword using the Pixabay API.
- **Responsive image gallery** with image previews and metadata.
- **Load More pagination** to fetch additional results.
- **Lightbox preview** to view high-resolution images.
- **Image captions** generated from image tags.
- **Loading indicator** while API requests are in progress.
- **Notifications** for empty searches, failed requests, and end-of-results states.
- **Smooth scrolling** after loading additional images.
- **Safe search** enabled for Pixabay requests.

## 🧰 Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic page structure |
| CSS3 | Responsive layout and styling |
| JavaScript (ES Modules) | Application logic and DOM interaction |
| Axios | HTTP requests to the Pixabay API |
| Pixabay API | Image search and image metadata |
| SimpleLightbox | Full-size image preview |
| iziToast | User notifications |
| Vite | Development server and production build |
| Git & GitHub | Version control and source hosting |

## 🖼️ How It Works

1. Enter a keyword in the search field and submit the form.
2. The application requests matching photos from Pixabay.
3. Search results are rendered as gallery cards with likes, views, comments, and download counts.
4. Select an image to open its larger version in the lightbox.
5. Click **Load More** to retrieve the next page of results.

## 🗂️ Project Structure

```text
goit-js-hw-12/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── pixabay-api.js
│   │   └── render-functions.js
│   ├── index.html
│   └── main.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/orxen3-dot/goit-js-hw-12.git
   ```

2. Navigate to the project directory:

   ```bash
   cd goit-js-hw-12
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal (Vite uses `http://localhost:5173` by default).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |

## 🔐 API Configuration & Security

This project uses the [Pixabay API](https://pixabay.com/api/docs/) to retrieve images.

**Important:** API credentials should not be committed to a public repository. Before publishing or reusing this project, move the Pixabay API key out of the source code and into an environment variable (for example, `VITE_PIXABAY_API_KEY`), then read it through `import.meta.env` in the Vite application.

If a real API key has already been pushed to a public repository, revoke or regenerate it in your Pixabay account. A Vite environment variable keeps the key out of source files, but it does not make a browser-exposed API key secret after the app is built.

## 🧠 What I Practiced

- Making asynchronous HTTP requests with Axios and `async/await`.
- Working with a third-party REST API and query parameters.
- Handling API responses, empty results, and request errors.
- Managing search state and pagination.
- Creating and updating DOM elements dynamically.
- Splitting application logic into reusable ES modules.
- Integrating third-party libraries (SimpleLightbox and iziToast).
- Implementing loading states and user feedback.
- Building a responsive gallery interface.

## 👤 Author

**Hryhorii Shalashnyi**

- GitHub: [@orxen3-dot](https://github.com/orxen3-dot)
- LinkedIn: [hryhorii-shalashnyi](https://www.linkedin.com/in/hryhorii-shalashnyi)
- Email: [shalashnyihryhorii@gmail.com](mailto:shalashnyihryhorii@gmail.com)

---

<div align="center">

*Built with JavaScript and a little curiosity.* ✨

</div>

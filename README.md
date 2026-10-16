# 🔗 Simple URL Shortener

A simple and responsive URL Shortener application built with **Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript**.

This project converts long URLs into short, unique links. When users open a shortened URL, they are automatically redirected to the original website.

## ✨ Features

- Convert long URLs into short URLs.
- Generate unique short codes automatically.
- Store URL mappings in MongoDB.
- Redirect short URLs to their original destinations.
- Simple and user-friendly frontend.
- Copy shortened URLs with one click.
- Validate URL formats.
- Accept only HTTP and HTTPS URLs.
- Handle missing URLs and invalid short codes.
- Display success and error messages.

## 🛠️ Technologies Used

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

**Frontend**
- HTML5
- CSS3
- JavaScript

**API Testing**
- Postman

## 📁 Project Structure

```text
url-shortener/
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── public/
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/url_shortener
BASE_URL=http://localhost:5000
```

Make sure MongoDB is installed and running.

### 5. Start the application

```bash
npm run dev
```

The server will start at:

**http://localhost:5000**

Open this address in your browser to use the URL Shortener application.

## 🚀 How to Use

1. Open the application in your browser.
2. Enter a long URL, such as `https://www.google.com`.
3. Click the **Shorten URL** button.
4. Your shortened URL will appear on the screen.
5. Click **Copy Short URL** to copy the generated link.
6. Open the short URL to visit the original website.

## 🔌 API Endpoints

### 1. Check Server Status

- **Method:** `GET`
- **Endpoint:** `/`

Returns a message confirming that the API is running.

### 2. Create a Short URL

- **Method:** `POST`
- **Endpoint:** `/api/urls`
- **Content-Type:** `application/json`

Request body:

```json
{
  "originalUrl": "https://www.google.com"
}
```

Example successful response:

```json
{
  "message": "Short URL created successfully",
  "originalUrl": "https://www.google.com/",
  "shortCode": "35aa3468",
  "shortUrl": "http://localhost:5000/35aa3468"
}
```

The generated short code will differ for each newly created URL.

### 3. Redirect to the Original URL

- **Method:** `GET`
- **Endpoint:** `/:shortCode`

Example:

```text
http://localhost:5000/35aa3468
```

Accessing the short URL redirects the user to the original website.

## ❌ Error Handling

The application handles the following errors:

| Situation | HTTP Status |
|---|---:|
| Original URL is missing | 400 |
| Invalid URL format | 400 |
| Unsupported URL protocol | 400 |
| Short code not found | 404 |
| Unexpected server error | 500 |

## 🧪 Testing

The backend API was tested using Postman, and the frontend was tested in a web browser.

Tests include:

- Creating a short URL successfully.
- Redirecting to the original website.
- Handling invalid short codes.
- Rejecting missing or invalid URLs.
- Rejecting unsupported protocols.
- Creating a short URL through the frontend.
- Copying the generated short URL.

## 🔒 Environment Variables and Security

- The `.env` file contains local configuration and should not be committed to GitHub.
- The `node_modules/` directory should be excluded from version control.
- The `.gitignore` file is used to prevent these files from being uploaded.

## 💡 Future Improvements

- Track the number of clicks on each short URL.
- Add URL expiration functionality.
- Create a dashboard to manage shortened URLs.
- Deploy the application online.

## 👩‍💻 Author

**Tanjila Akter**

GitHub: [tanjila-akter04](https://github.com/tanjila-akter04)

---

*This project was developed as a backend development assignment with an optional frontend to practice REST API development, database integration, URL validation, and HTTP redirects.*

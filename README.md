# 🔗 Simple URL Shortener

A simple URL Shortener backend application built with **Node.js, Express.js, and MongoDB**. It converts long URLs into short, unique links and redirects users to the original URL when the short link is accessed.

## ✨ Features

- Create short URLs from long URLs.
- Generate unique short codes automatically.
- Store original URLs and short codes in MongoDB.
- Redirect users to the original URL using the short URL.
- Validate URL formats.
- Accept only HTTP and HTTPS URLs.
- Handle missing URLs and invalid short codes.
- Return appropriate error responses.

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — Backend web framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modeling
- **dotenv** — Environment variable management
- **Nodemon** — Development server utility
- **Postman** — API testing

## 📁 Project Structure

```text
url-shortener/
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/url_shortener
BASE_URL=http://localhost:5000
```

Make sure MongoDB is installed and running on your computer.

### 5. Start the development server

```bash
npm run dev
```

The server will run at:

`http://localhost:5000`

## 🚀 API Endpoints

### 1. Check Server Status

- **Method:** `GET`
- **Endpoint:** `/`

Example:

```text
http://localhost:5000/
```

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

The short code will be generated automatically and may differ for each URL.

### 3. Redirect to the Original URL

- **Method:** `GET`
- **Endpoint:** `/:shortCode`

Example:

```text
http://localhost:5000/35aa3468
```

Accessing this short URL redirects the user to the original website.

## ❌ Error Handling

The API handles the following cases:

| Situation | Expected response |
|---|---|
| Original URL is missing | `400 Bad Request` |
| Invalid URL format | `400 Bad Request` |
| URL uses an unsupported protocol | `400 Bad Request` |
| Short code does not exist | `404 Not Found` |
| Unexpected server error | `500 Internal Server Error` |

## 🧪 Testing

The API endpoints were tested using **Postman**.

Tests include:

- Successfully creating a short URL.
- Redirecting to the original URL.
- Handling invalid short codes.
- Rejecting missing or invalid URLs.
- Rejecting protocols other than HTTP and HTTPS.

## 🔒 Environment Variables

The `.env` file contains local configuration and must not be committed to GitHub. It is excluded through `.gitignore`.

## 📌 Future Improvements

- Build a simple frontend to enter long URLs and display short links.
- Add click tracking and URL analytics.
- Add URL expiration functionality.
- Create a dashboard to manage shortened URLs.

## 👩‍💻 Author

**Tanjila Akter**

GitHub: [tanjila-akter04](https://github.com/tanjila-akter04)

---

*This project was developed as a backend development assignment to practice REST API development, database integration, URL validation, and HTTP redirects.*

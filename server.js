
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRoutes");


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "URL Shortener API is running"
  });
});

// URL routes
app.use("/", urlRoutes);

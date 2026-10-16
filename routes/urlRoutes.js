const express = require("express");
const crypto = require("crypto");
const Url = require("../models/Url");

const router = express.Router();


router.post("/api/urls", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: "Original URL is required"
      });
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(originalUrl);
    } catch {
      return res.status(400).json({
        message: "Please provide a valid URL"
      });
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return res.status(400).json({
        message: "Only HTTP and HTTPS URLs are allowed"
      });
    }

    let shortCode;
    let exists = true;

    while (exists) {
      shortCode = crypto.randomBytes(4).toString("hex");
      exists = await Url.exists({ shortCode });
    }

    const newUrl = await Url.create({
      originalUrl: parsedUrl.href,
      shortCode
    });

    const shortUrl =
      `${process.env.BASE_URL}/${newUrl.shortCode}`;

    return res.status(201).json({
      message: "Short URL created successfully",
      originalUrl: newUrl.originalUrl,
      shortCode: newUrl.shortCode,
      shortUrl
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});


router.get("/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.shortCode
    });

    if (!url) {
      return res.status(404).json({
        message: "Short URL not found"
      });
    }

    return res.redirect(302, url.originalUrl);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

module.exports = router;




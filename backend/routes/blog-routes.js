const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blog-controller");

router.get("/", blogController.getAllBlogs);

router.get("/:blogId", blogController.getBlogById);

router.post("/", blogController.createBlog);

router.delete("/:blogId", blogController.deleteBlog);

module.exports = router;
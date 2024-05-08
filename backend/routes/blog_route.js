const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.js");
const fetchuser = require("../middleware/fetchuser.js");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Route 1: Create a blog using POST "/api/blog/createblog". Login required
router.post("/createblog",
    [
        fetchuser,
        body("title", "Title is required").notEmpty(),
        body("date", "Date is required").notEmpty(),
        body("category", "Category is required").notEmpty(),
        body("blog_thumbnail", "Thumbnail URL is required").notEmpty().isURL(),
        body("blog_link", "Blog link is required").notEmpty().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, date, category, blog_thumbnail, blog_link } = req.body;
            // Check if blog with the same title already exists
            const existingBlog = await Blog.findOne({ title });
            if (existingBlog) {
                return res.status(400).json({ error: "Blog with this title already exists" });
            }
            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            // Create a new blog
            const newBlog = new Blog({
                title: sanitizedTitle,
                date,
                category: sanitizedCategory,
                blog_thumbnail,
                blog_link
            });

            const savedBlog = await newBlog.save();
            res.json({ message: "Blog created successfully", blog: savedBlog });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 2: Update a blog using PUT "/api/blog/updateblog". Login required
router.put("/updateblog",
    [
        fetchuser,
        body("title", "Title is required").notEmpty(),
        body("date", "Date is required").notEmpty(),
        body("category", "Category is required").notEmpty(),
        body("blog_thumbnail", "Thumbnail URL is required").notEmpty().isURL(),
        body("blog_link", "Blog link is required").notEmpty().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, date, category, blog_thumbnail, blog_link } = req.body;

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            let blogToUpdate = await Blog.findOne({ title: sanitizedTitle });
            if (!blogToUpdate) return res.status(404).send("Blog not found");

            blogToUpdate = await Blog.findOneAndUpdate(
                { title: sanitizedTitle },
                { $set: { date, category: sanitizedCategory, blog_thumbnail, blog_link } },
                { new: true }
            );
            res.json({ message: "Blog updated successfully", blog: blogToUpdate });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 3: Delete a blog using DELETE "/api/blog/deleteblog". Login required
router.delete("/deleteblog",
    [
        fetchuser,
        body("title", "Title is required").notEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title } = req.body;
            let blogToDelete = await Blog.findOne({ title });
            if (!blogToDelete) return res.status(404).send("Blog not found");

            const deletedBlog = await Blog.findOneAndDelete({ title });
            res.json({ message: "Blog deleted successfully", blog: deletedBlog });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 4: Get all the blogs using GET "blog/getblog". Login required
router.get("/getblog", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route 5: Get a blog using GET "blog/getblog/:id". Login required
router.get("/getblog/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send("Blog not found");
        res.json(blog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route 6: Get a blog using POST "/api/blog/getblog" by title. Login required
router.post("/getblog",
    [
        fetchuser,
        body("title", "Title is required").notEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title } = req.body;
            const blog = await Blog.findOne({ title });
            if (!blog) return res.status(404).send("Blog not found");
            res.json(blog);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

module.exports = router;

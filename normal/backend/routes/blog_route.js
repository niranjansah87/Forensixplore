const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.js");
const fetchuser = require("../middleware/fetchuser.js");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const multer = require('multer');
const path = require('path');
// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Route to create a blog
router.post("/createblog",
    fetchuser,
    upload.single('thumbnail'),
    [
        body("title", "Title is required").notEmpty(),
        body("date", "Date is required").notEmpty(),
        body("category", "Category is required").notEmpty(),
        body("blogLink", "Blog link is required").notEmpty().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, date, category, description, blogLink } = req.body;
            const thumbnail = req.file.path.replace(/\\/g, "/");

            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            const newBlog = new Blog({
                title: sanitizedTitle,
                date,
                category: sanitizedCategory,
                description,
                blog_thumbnail: thumbnail,
                blog_link: blogLink,
                user: req.user.id
            });

            const savedBlog = await newBlog.save();
            res.json({ message: "Blog created successfully", blog: savedBlog });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route to update a blog
router.put("/updateblog", fetchuser, upload.single('thumbnail'), [
    body("title", "Title is required").notEmpty(),
    body("date", "Date is required").notEmpty(),
    body("category", "Category is required").notEmpty(),
    body("blogLink", "Blog link is required").notEmpty().isURL(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, date, category, description, blogLink } = req.body;
        const sanitizedTitle = sanitizeHtml(title);
        const sanitizedCategory = sanitizeHtml(category);

        let blogToUpdate = await Blog.findOne({ title: sanitizedTitle });
        if (!blogToUpdate) return res.status(404).send("Blog not found");

        const updateFields = {
            date,
            category: sanitizedCategory,
            description,
            blog_link: blogLink
        };

        if (req.file) {
            updateFields.blog_thumbnail = req.file.path;
        }

        blogToUpdate = await Blog.findOneAndUpdate(
            { title: sanitizedTitle },
            { $set: updateFields },
            { new: true }
        );
        res.json({ message: "Blog updated successfully", blog: blogToUpdate });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});




// Route to update blog by ID
router.put("/updateblog/:id", fetchuser, upload.single('thumbnail'), [
    body("date", "Date is required").notEmpty(),
    body("category", "Category is required").notEmpty(),
    body("blogLink", "Blog link is required").notEmpty().isURL(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params; // Extract id from URL parameter
        const { date, category, description, blogLink } = req.body;
        const sanitizedCategory = sanitizeHtml(category);

        let blogToUpdate = await Blog.findById(id).populate("user", "id");

        if (!blogToUpdate) return res.status(404).send("Blog not found");

        // Check if blogToUpdate.user is defined before accessing its id property
        if (blogToUpdate.user && blogToUpdate.user.id !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        const updateFields = {
            date,
            category: sanitizedCategory,
            description,
            blog_link: blogLink
        };

        if (req.file) {
            updateFields.blog_thumbnail = req.file.path;
        }

        blog = await Blog.findOneAndUpdate(
            { _id: id },
            { $set: updateFields },
            { new: true }
        );
        res.json({ message: "Blog updated successfully", blog: blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});






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
// Route to get a blog by title
router.get("/getblog/:title", async (req, res) => {
    try {
        const blog = await Blog.findOne({ title: req.params.title });
        if (!blog) return res.status(404).send("Blog not found");
        res.json(blog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

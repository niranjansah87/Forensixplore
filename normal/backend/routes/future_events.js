// Import required modules
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { body, param, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");
const fetchuser = require("../middleware/fetchuser.js");
const FutureEvent = require("../models/future_events");
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/future_Events');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });
// Route 1: Create a future event using POST "/event/createfutureevent". Login required
router.post("/createfutureevent",
    [
        fetchuser,
        upload.single('eventPoster'), // Multer middleware to handle single file upload
        body("title", "Title is required").notEmpty(),
        body("date", "Date is required").notEmpty().isISO8601(),
        body("category", "Category is required").notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        body("registrationLink", "Registration link must be a valid URL").optional().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, date, category, description, registrationLink } = req.body;
            const eventPoster = req.file.path.replace(/\\/g, "/");

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            // Create a new future event
            const newFutureEvent = new FutureEvent({
                title: sanitizedTitle,
                date,
                category: sanitizedCategory,
                description,
                eventPoster,
                registrationLink
            });

            const savedFutureEvent = await newFutureEvent.save();
            res.json({ message: "Future event created successfully", event: savedFutureEvent });
        } catch (error) {
            console.error(error.message);
            if (req.file) {
                // If there was an error and the file was uploaded, delete the file
                fs.unlinkSync(path.join(__dirname, '..', req.file.path));
            }
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 2: Update a future event using PUT "/fevent/updatefutureevent/:id". Login required
router.put("/updatefutureevent/:id",
    [
        fetchuser,
        upload.single('eventPoster'),
        param("id", "Invalid event ID").isMongoId(),
        body("title", "Title is required").notEmpty(),
        body("date", "Date is required").notEmpty().isISO8601(),
        body("category", "Category is required").notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        // body("eventPoster", "Event poster URL is required").notEmpty().isURL(),
        body("registrationLink", "Registration link must be a valid URL").optional().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const eventId = req.params.id;
            const { title, date, category, registrationLink } = req.body;
            const eventPoster = req.file ? req.file.path.replace(/\\/g, "/") : undefined;

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            let futureEventToUpdate = await FutureEvent.findById(eventId);
            if (!futureEventToUpdate) return res.status(404).send("Future event not found");

            futureEventToUpdate.title = sanitizedTitle;
            futureEventToUpdate.date = date;
            futureEventToUpdate.category = sanitizedCategory;
            futureEventToUpdate.eventPoster = eventPoster;
            futureEventToUpdate.registrationLink = registrationLink;

            const updatedFutureEvent = await futureEventToUpdate.save();
            res.json(updatedFutureEvent);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 3: Delete a future event using DELETE "/event/deletefutureevent/:id". Login required
router.delete("/deletefutureevent/:id",
    [
        fetchuser,
        param("id", "Invalid event ID").isMongoId(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const eventId = req.params.id;
            const deletedFutureEvent = await FutureEvent.findByIdAndDelete(eventId);
            if (!deletedFutureEvent) return res.status(404).send("Future event not found");

            res.json(deletedFutureEvent);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 4: Get all future events using GET "/event/getfutureevents". Login required
router.get("/getfutureevents", async (req, res) => {
    try {
        const futureEvents = await FutureEvent.find();
        res.json(futureEvents);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route 5: Get a future event by ID using GET "/event/getfutureevent/:id". Login required
router.get("/getfutureevent/:id",
    [
        fetchuser,
        param("id", "Invalid event ID").isMongoId(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const eventId = req.params.id;
            const futureEvent = await FutureEvent.findById(eventId);
            if (!futureEvent) return res.status(404).send("Future event not found");

            res.json(futureEvent);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

module.exports = router;

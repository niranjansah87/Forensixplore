const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const Event = require('../models/past_events');
const fetchuser = require('../middleware/fetchuser');
const sanitizeHtml = require('sanitize-html');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/past_events');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Route to create a past event
router.post(
    '/createpastevent',
    [
        fetchuser,
        upload.single('eventPoster'), // Use multer middleware to handle the file upload
        body('title', 'Title is required').notEmpty(),
        body('category', 'Category is required').notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        body('registrationLink', 'Registration link must be a valid URL').optional()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, category, description, registrationLink } = req.body;
            const eventPoster = req.file.path.replace(/\\/g, "/");
            
            // Check if past event with the same title already exists
            const existingEvent = await Event.findOne({ title });
            if (existingEvent) {
                return res.status(400).json({ error: 'Event with this title already exists' });
            }

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            // Create a new past event
            const newEvent = new Event({
                title: sanitizedTitle,
                category: sanitizedCategory,
                description,
                eventPoster,
                registrationLink
            });

            const savedEvent = await newEvent.save();
            res.json({ message: 'Past event created successfully', event: savedEvent });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        }
    }
);



// Route 2: Update a past event using PUT "/pevent/updatepastevent/". Login required
router.put("/updatepastevent/:id",
    [
        fetchuser,
        upload.single('eventPoster'), // Multer middleware to handle single file upload
        body("title", "Title is required").notEmpty(),
        body("category", "Category is required").notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        body("registrationLink", "Registration link must be a valid URL").optional().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, category, registrationLink } = req.body;
            const eventPoster = req.file ? req.file.path.replace(/\\/g, "/") : undefined;

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            let eventToUpdate = await Event.findById(req.params.id);
            if (!eventToUpdate) {
                console.error("Event not found");
                return res.status(404).send("Event not found");
            }

            eventToUpdate.title = sanitizedTitle;
            eventToUpdate.category = sanitizedCategory;
            if (eventPoster) {
                eventToUpdate.eventPoster = eventPoster;
            }
            eventToUpdate.registrationLink = registrationLink;

            const updatedEvent = await eventToUpdate.save();
            res.json(updatedEvent);
        } catch (error) {
            console.error("Error updating event:", error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);


// Route 3: Delete a past event using DELETE "/event/deletepastevent/:id". Login required
router.delete("/deletepastevent/:id",
    fetchuser,
    async (req, res) => {
        try {
            const deletedEvent = await Event.findByIdAndDelete(req.params.id);
            if (!deletedEvent) return res.status(404).send("Event not found");
            res.json({ message: "Past event deleted successfully", event: deletedEvent });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 4: Get all past events using GET "/event/getpastevents". Login required
router.get("/getpastevents",
    
    async (req, res) => {
        try {
            const pastEvents = await Event.find();
            res.json(pastEvents);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 5: Get a past event by ID using GET "/event/getpastevent/:id". Login required
router.get("/getpastevent/:id",
    
    async (req, res) => {
        try {
            const pastEvent = await Event.findById(req.params.id);
            if (!pastEvent) return res.status(404).send("Event not found");
            res.json(pastEvent);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

module.exports = router;

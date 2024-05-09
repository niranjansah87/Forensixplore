const express = require("express");
const router = express.Router();
const Event = require("../models/past_events");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const sanitizeHtml = require("sanitize-html");

// Route 1: Create a past event using POST "/event/createpastevent". Login required
router.post("/createpastevent",
    [
        fetchuser,
        body("title", "Title is required").notEmpty(),
        body("category", "Category is required").notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        
        body("eventPoster", "Event poster URL is required").notEmpty().isURL(),
        body("registrationLink", "Registration link must be a valid URL").optional().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, category, description,eventPoster, registrationLink } = req.body;
            // Check if past event with the same title already exists
            const existingEvent = await Event.findOne({ title });
            if (existingEvent) {
                return res.status(400).json({ error: "Event with this title already exists" });
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
            res.json({ message: "Past event created successfully", event: savedEvent });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 2: Update a past event using PUT "/event/updatepastevent/:id". Login required
router.put("/updatepastevent/:id",
    [
        fetchuser,
        body("title", "Title is required").notEmpty(),
        body("category", "Category is required").notEmpty().isIn(['TEC', 'HWB', 'ESO', 'LCH', 'IIE']),
        body("eventPoster", "Event poster URL is required").notEmpty().isURL(),
        body("registrationLink", "Registration link must be a valid URL").optional().isURL(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title, category, eventPoster, registrationLink } = req.body;

            // Sanitize user inputs
            const sanitizedTitle = sanitizeHtml(title);
            const sanitizedCategory = sanitizeHtml(category);

            let eventToUpdate = await Event.findById(req.params.id);
            if (!eventToUpdate) return res.status(404).send("Event not found");

            eventToUpdate.title = sanitizedTitle;
            eventToUpdate.category = sanitizedCategory;
            eventToUpdate.eventPoster = eventPoster;
            eventToUpdate.registrationLink = registrationLink;

            const updatedEvent = await eventToUpdate.save();
            res.json(updatedEvent);
        } catch (error) {
            console.error(error.message);
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

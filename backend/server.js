const connectToMongoose = require('./config/db');
const express = require('express');
require("dotenv").config();
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5001;

// Apply CORS middleware
const allowedOrigins = ['http://localhost:5173','*']; // Update with your frontend URL
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Connect to MongoDB
connectToMongoose();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Available routes
app.use('/blog', require('./routes/blog_route'));
app.use('/admin', require('./routes/admin'));
app.use('/pevent', require('./routes/past_events'));
app.use('/fevent', require('./routes/future_events'));

// Handle preflight requests for all routes
app.options('*', cors());

// Start the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

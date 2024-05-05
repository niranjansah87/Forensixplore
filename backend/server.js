const connectToMongoose = require('./config/db');
const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const port = 5001;

// Connect to MongoDB
connectToMongoose();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
// Apply CORS middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


// Available routes
// app.use('/blog', require('./routes/blog_route'));
// app.use('/admin', require('./routes/admin'));


// Start the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
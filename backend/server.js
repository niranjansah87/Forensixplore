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
app.use(cors({ origin: '*', credentials: true }));


// Available routes
app.use('/blog', require('./routes/blog_route'));
app.use('/admin', require('./routes/admin'));
app.use('/pevent', require('./routes/past_events'));
app.use('/fevent', require('./routes/future_events'));


// Start the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


const allowedOrigins = ['*']; // Add your allowed domains here

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

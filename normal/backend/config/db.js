const mongoose = require('mongoose');


const connectToMongoose = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        console.log("Connected to MongoDB");
    } catch (err) {

        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectToMongoose;
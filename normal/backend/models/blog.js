const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        default: 'Security',
        required: true,
    },
    blog_thumbnail: {
        type: String,
        default: 'https://imageio.forbes.com/specials-images/dam/imageserve/1161250453/960x0.jpg?height=474&width=711&fit=bounds',
        required: true,
    },
    blog_link: {
        type: String,
        required: false,
        default: '/'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:false,
        ref: 'Admin' 
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['fiction', 'non-fiction', 'comic', 'others'],
        default: 'others'
    },

    isBestSeller: {
        type: Boolean,
        default: false
    },

    publicationDate: {
        type: Date,
        required: true
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;

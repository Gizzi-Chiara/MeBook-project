const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "The title of the book is mandatory"],
            minLength: [3, "The title must be at least 3 characters long"]
        },
        cover: {
            type: String,
            required: [true, "The image is mandatory"]
        },
        description: {
            type: String,
            required: [true, "The description is mandatory"],
            maxLength: 500
        },
        pages: {
            type: Number,
            required: [true, "The page number is mandatory"],
            min: 0,
        },
        publisher: {
            type: String,
            required: [true, "The publisher  is mandatory"],
            minLength: [3, "The publisher's name must be at least 3 characters long"]
        },
        year: {
            type: Date,
            required: [true, "The year of the book is mandatory"],
            min: '1000-01-01',
        },
        rating: {
            type: Number,
            required: [true, "The rating is mandatory and must be a number between 1 and 5"],
            mix: 1,
            max: 5,
        }
    }, { timestamps: true, versionKey: false }
)

const books = mongoose.model("books", booksSchema);
module.exports = books;
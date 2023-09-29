const Books = require("../models/books.model");
const jwt = require("jsonwebtoken");
const secret_key = "Secret_Key";

const saveBook = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    console.log(usertoken_decoded);
    let newBook = req.body;
    newBook.creator = usertoken_decoded._id;
    Books.create(newBook)
        .then(book => res.json(book))
        .catch(err => {
            res.status(400).json(err);
        })
}

const findBooks = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Books.find({creator: usertoken_decoded._id}).collation({locate: "en"}).sort({ title: 1 })
        .then(books => res.json(books))
        .catch(err => {
            res.status(400).json(err);
        })
}

const findBook = (req, res) => {
    Books.findOne({ _id: req.params.id })
        .then(book => res.json(book))
        .catch(err => {
            res.status(400).json(err);
        })
}

const deleteBook = (req, res) => {
    Books.deleteOne({ _id: req.params.id })
        .then(book => res.json(book))
        .catch(err => {
            res.status(400).json(err);
        })
}

const updateBook = (req, res) => {
    Books.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(book => res.json(book))
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports = {
    saveBook,
    findBooks,
    findBook,
    deleteBook,
    updateBook
}
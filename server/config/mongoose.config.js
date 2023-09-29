const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected with DB"))
    .catch( err => console.log("DB connection error", err));
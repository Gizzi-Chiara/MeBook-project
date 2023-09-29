const booksController = require("../controllers/books.controller");
const registerController = require("../controllers/register.controller");

const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/books", authenticate, booksController.findBooks);
    app.get("/api/books/:id", authenticate, booksController.findBook);
    app.post("/api/books/save", authenticate, booksController.saveBook);
    app.put("/api/books/edit/:id", authenticate, booksController.updateBook);
    app.delete("/api/books/:id", authenticate, booksController.deleteBook);
    app.post("/api/register", registerController.register);
    app.post("/api/login", registerController.login);
    app.get("/api/logout", registerController.logout);
}
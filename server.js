const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json(), express.urlencoded({extended:true}));

app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/books.routes");
misRutas(app);

app.listen(8000, ()=>console.log("Server ready"));
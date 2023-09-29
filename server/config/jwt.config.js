const jwt = require("jsonwebtoken");
const secret_key = "Secret_Key";

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret_key, (err, payload) => {
        if (err) {
            res.json(401).json({verified: false});
        } else {
            next();
        }
    })
}
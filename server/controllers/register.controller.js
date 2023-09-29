const Register = require("../models/register.model");
const jwt = require("jsonwebtoken");
const secret_key = "Secret_Key";
const bcrypt = require("bcrypt");

module.exports.register = (req, res) => {

    const user = new Register(req.body);
    user.save()
        .then(usuario => {

            const payload = {
                _id: user._id
            }

            const myJWT = jwt.sign(payload, secret_key)

            res
                .cookie("usertoken", myJWT, secret_key, {
                    httpOnly: true
                })
                .json(usuario)

        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.login = (req, res) => {
    Register.findOne({email: req.body.email})
        .then(user => {
            if (user === null){
                res.json({error: true, message: "The email doesn't exist"});
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if (passwordValid){

                            const payload = {
                                _id: user._id
                            }

                            const myJWT = jwt.sign(payload, secret_key);

                            res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message:"Accessed correctly"})

                        } else {
                            res.json({error: true, message:"Your password is incorrect"})
                        }
                    })
                    .catch(err => res.json({error: true, message: "Access incorrect"}))
            }
        })
        .catch ( err => res.json(err));
}

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.status(200).json({message: "Logout successful"});
}
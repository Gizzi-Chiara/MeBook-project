const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const registerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "The name is mandatory"],
            minLength: [2, "The name must be at least 2 characters long"]
        },
        email: {
            type: String,
            required: [true, "The email is mandatory"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)
            },
            unique: true
        },
        password: {
            type: String,
            required: [true, "The password is mandatory"],
            minLength: [8, "The password must be at least 8 characters long"]
        },
        favorite: {
            type: String,
            minLength: [3, "The title must be at least 3 characters long"]
        },
        birthday: {
            type: Date,
            required: [true, "Your birthday is mandatory"],
            min: '1900-01-01',
            max: '2023-01-01'
        }
    }, { timestamps: true, versionKey: false }
)

registerSchema.virtual("confirmPassword")
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value)

registerSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords don't match");
    }

    next();
})

registerSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
})

const register = mongoose.model("register", registerSchema);
module.exports = register;
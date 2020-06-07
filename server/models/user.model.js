const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    displayName : String,
    email : String,
    password : String,
    createAt: Date,
})

const User = mongoose.model("User", userSchema, "user");


module.exports = User;

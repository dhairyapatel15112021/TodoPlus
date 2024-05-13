const mongoose = require("mongoose");

mongoose.pluralize(null);

const UserSchema = new mongoose.Schema({
    username:String,
    password : String,
})

const User = mongoose.model("user",UserSchema);

module.exports = User;
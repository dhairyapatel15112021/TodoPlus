const mongoose = require("mongoose");

mongoose.pluralize(null);
const todoSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    todo: [
        {
            title: String,
            decription: String,
            //date: Date,
            complete: Boolean,
            priority: Number,
        }
    ]
});

const todo = mongoose.model("todo",todoSchema);

module.exports = todo;
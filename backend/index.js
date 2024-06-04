const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const cors = require("cors");
const zod = require("zod");
const User = require("./db/User");
const Todo = require("./db/Todo");

const authenticationHandler = require("./middlewares/user-controller");

const app = express();
const JWT_SECRET = "T1O2D3O4";
app.use(express.json());
app.use(cors());

const userSchema = zod.string().email();
const passwordSchema = zod.string().min(8);
const todoSchema = zod.object({
    title: zod.string(),
    decription: zod.string(),
    // date: zod.date(),
    complete: zod.boolean(),
    priority: zod.number()
});

// path for Signup User
app.post("/signup", async (req, res) => {
    // I have tried Promise syntax instead of async await but in this case promising chaining is become little bit difficult so i used async await syntax.
    try {
        const { username, password } = req.body;
        if (!((userSchema.safeParse(username)).success) || !((passwordSchema.safeParse(password)).success)) {
            return res.status(200).json({ "error": "Please Enter Valid Inputs" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(201).json({ "error": "already user exist!" });
        }
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);
        const createUser = await User.create({ username: username, password: hashedPassword });
        if (createUser) {
            return res.status(200).json({ "msg": "User created succesfully" });
        }
        res.status(201).json({ "error": "User Not created" });
    }
    catch (err) {
        res.status(500).json({ "Msg": "Something Went Wrong!,User Not created" });
    }
});

// path for Signin User
app.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!((userSchema.safeParse(username)).success) || !((passwordSchema.safeParse(password)).success)) {
            return res.status(200).json({ "error": "Please Enter Valid Inputs" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(201).json({ "error": "user not exist!" });
        }
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(201).json({ "error": "wrong password!" });
        }
        const token = jwt.sign({ username }, JWT_SECRET);
        res.status(200).json({ "token" : token });
    }
    catch (err) {
        res.status(500).json({ "Msg": "Something Went Wrong!,User Not Sing in" });
    }
});

// path for posting todos
app.post("/todo", authenticationHandler, async (req, res) => {
    try {
        const data = req.body;
        if (!(todoSchema.safeParse(data)).success) {
            return res.status(500).json({ "msg": "Please Enter valid inputs" });
        }
        const id = await User.findOne({ username: req.username }, { _id: 1 });
        const todo = await Todo.findOne({ id });
        if (!todo) {
            await Todo.create({ id, todo: [data] });
        }
        else {
            await Todo.updateOne({ id }, { $push: { todo: data } });
        }
        res.status(200).json({ "msg": "suceess" });
    }
    catch (err) {
        res.status(500).json({ "Msg": "Something Went Wrong!" });
    }
});

// path for getting all Todos
app.get("/todo", authenticationHandler, async (req, res) => {
    const id = await User.findOne({ username: req.username }, { _id: 1 });
    const todo = await Todo.findOne({ id }, { todo: 1, _id: 0 });
    if (!todo) {
        res.status(200).json({ "todo": "no to do created" });

    }
    else {
        res.status(200).json(todo);
    }
});


app.put("/completeTodo", authenticationHandler, (req, res) => {
    
});

app.use((err, req, res, next) => {
    res.status(403).send("Something went wrong");
})
/*
https://chat.openai.com/share/752d6a76-5449-4632-91e9-90397efb27f6
*/
app.listen(5040, () => {
    mongoose.connect("mongodb+srv://pateldhairya0210:6WenZfAPR5pes1RM@cluster0.p3fudp9.mongodb.net/Todo").then(() => {
        console.log("Success!");
    })
        .catch(() => {
            console.log("Connection Failed!");
        })
});

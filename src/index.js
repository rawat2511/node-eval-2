const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskController = require('./controllers/task.controller');
// const { body, validationResult } = require('express-validator');
// const Task = require('./models/task.model');

const PORT = 8000;

const db = "mongodb+srv://shubham:iamamit@cluster0.vynwj.mongodb.net/evaluation?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks', taskController);



app.listen(PORT, async (req, res) => {
    console.log("Listening to port 8000")
    try {
        console.log("Inside Try Block");  
        await mongoose.connect(db);
    }
    catch(err) {
        console.log(err.message);
    }
})
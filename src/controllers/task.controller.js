// add tasks, delete tasks, edit task,

const express = require('express');
const Task = require('../models/task.model');
const router = express.Router();

router.get('/', async (req, res) => {
    const page = req.query.page || 1;
    // const count = Task.find().countDocuments();
    // console.log(count, "count");
    // console.log(page, Number(count)/3);
    // if(page > count/3){
    //     return res.status(404).json({"Error": "Error: Page Limit Exceeded"})
    // }
    const limit = 3;
    const offSet = (page-1)*limit;
    console.log(offSet);
    const tasks = await Task.find().skip(offSet).limit(3);
    res.status(200).json(tasks);
})

router.post('/', async (req, res) => {
    const createdTask = await Task.create(req.body);
    res.status(200).json(createdTask);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const item = await Task.findById(id);
    res.status(200).json(item);
})

router.patch('/:id', async (req, res) => {
    const updateTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateTask);
})

router.delete('/:id', async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
})

module.exports = router;
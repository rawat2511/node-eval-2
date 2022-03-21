
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    status: { type: Boolean, required: true },
    subTask: [ { type: String } ]
})

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
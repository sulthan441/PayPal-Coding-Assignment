
const mongoose = require("mongoose");



const sprintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    task: [{
        type: String,
        ref: "Task"

    }]
})
const Sprint = mongoose.model('Sprint', sprintSchema);
module.exports = Sprint;
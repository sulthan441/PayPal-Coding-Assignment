
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['bug', 'feature', 'story'],
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'done'],
    required: true
  },
  assignee: {
    type: String,
    required: true
  },
  sprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint'
  }

});

const Task = mongoose.model('Task', taskSchema);


module.exports = Task;

const Task = require("../model/task.model");

// Create a new Task
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single Task by ID
exports.getTaskById = async (req, res) => {
    res.json(res.task);
};

// Update a Task by ID
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
   
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a Task by ID
exports.deleteTask = async (req, res) => {
    try {
        await res.task.remove();
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Middleware function to get a single Task by ID
exports.getTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.task = task;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// Get all Tasks assigned to a user by assignee name
exports.getTasksByAssignee = async (req, res) => {
    try {
        const tasks = await Task.find({ assignee: req.params.assignee });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
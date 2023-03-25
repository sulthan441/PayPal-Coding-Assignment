const express = require('express');
const router = express.Router();
const {createTask,getAllTasks,getTask,getTaskById,getTasksByAssignee,updateTask,deleteTask,} = require('../controller/taskController');

// Create a new Task
router.post('/', createTask);

// Get all Tasks
router.get('/', getAllTasks);

// Get a single Task by ID
router.get('/:id', getTaskById);

// Update a Task by ID
router.patch('/:id', updateTask);

// Delete a Task by ID
router.delete('/:id', deleteTask);

// Get all Tasks of a particular Sprint by Sprint ID
router.get('/sprint/:sprintId', getTask);

// Get all Tasks assigned to a user by assignee name
router.get('/user/:assignee', getTasksByAssignee);

module.exports = router;
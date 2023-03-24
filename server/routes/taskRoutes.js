const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// Create a new Task
router.post('/', taskController.createTask);

// Get all Tasks
router.get('/', taskController.getAllTasks);

// Get a single Task by ID
router.get('/:id', taskController.getTaskById);

// Update a Task by ID
router.patch('/:id', taskController.updateTaskById);

// Delete a Task by ID
router.delete('/:id', taskController.deleteTaskById);

// Get all Tasks of a particular Sprint by Sprint ID
router.get('/sprint/:sprintId', taskController.getTasksBySprintId);

// Get all Tasks assigned to a user by assignee name
router.get('/user/:assignee', taskController.getTasksByAssignee);

module.exports = router;

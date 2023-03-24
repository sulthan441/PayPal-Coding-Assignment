const express = require('express');
const router = express.Router();
const sprintController = require('../controller/sprintController');

// Create a new Sprint
router.post('/', sprintController.createSprint);

// Get all Sprints
router.get('/', sprintController.getAllSprints);

// Get a single Sprint by ID
router.get('/:id', sprintController.getSprintById);

// Update a Sprint by ID
router.patch('/:id', sprintController.updateSprintById);

// Delete a Sprint by ID
router.delete('/:id', sprintController.deleteSprintById);

module.exports = router;

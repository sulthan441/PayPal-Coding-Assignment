const Sprint = require('../model/sprint.model');

// Create a new Sprint
exports.createSprint = async (req, res) => {
  try {
    const sprint = new Sprint(req.body);
    const savedSprint = await sprint.save();
    res.json(savedSprint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Sprints
exports.getAllSprints = async (req, res) => {
  try {
    const sprints = await Sprint.find();
    res.json(sprints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single Sprint by ID
exports.getSprintById = async (req, res) => {
  try {
    const sprint = await Sprint.findById(req.params.id);
    if (sprint == null) {
      return res.status(404).json({ message: 'Sprint not found' });
    }
    res.json(sprint);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Update a Sprint by ID
exports.updateSprintById = async (req, res) => {
  try {
    const updatedSprint = await Sprint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSprint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a Sprint by ID
exports.deleteSprintById = async (req, res) => {
  try {
    await Sprint.findByIdAndRemove(req.params.id);
    res.json({ message: 'Sprint deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

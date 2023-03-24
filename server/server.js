const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sprintRoutes = require('./routes/sprintRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost/taskplanner', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// API routes
app.use('/api/sprints', sprintRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

import React, { useState } from 'react';
import axios from 'axios';

const AddTaskForm = ({ sprintId, setTasks }) => {
  const [taskName, setTaskName] = useState('');
  const [taskType, setTaskType] = useState('bug');
  const [assignee, setAssignee] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTask = {
      name: taskName,
      description:"default",
      type: taskType,
      assignee,
      status: 'todo',
    };
    console.log(newTask)

    try {

      const response = await axios.post(`http://localhost:8000/api/tasks`, {
        name: taskName,
        description:"default",
        type: taskType,
        assignee,
        status: 'todo'
      });
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTaskName('');
      setTaskType('bug');
      setAssignee('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task-name">Task Name:</label>
        <input
          id="task-name"
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="task-type">Task Type:</label>
        <select id="task-type" value={taskType} onChange={handleTaskTypeChange}>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="story">Story</option>
        </select>
      </div>
      <div>
        <label htmlFor="assignee">Assignee:</label>
        <input
          id="assignee"
          type="text"
          value={assignee}
          onChange={handleAssigneeChange}
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

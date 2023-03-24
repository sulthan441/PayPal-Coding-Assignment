import React from 'react';

const TaskItem = ({ task, handleStatusChange, handleAssigneeChange }) => {

  const handleStatusSelect = (event) => {
    const newStatus = event.target.value;
    handleStatusChange(newStatus, task._id);
  };

  const handleAssigneeSelect = (event) => {
    const newAssignee = event.target.value;
    handleAssigneeChange(newAssignee, task._id);
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Assignee: {task.assignee}</p>
      <select onChange={handleStatusSelect} defaultValue={task.status}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <select onChange={handleAssigneeSelect} defaultValue={task.assignee}>
        <option value="John">John</option>
        <option value="Jane">Jane</option>
        <option value="Bob">Bob</option>
      </select>
    </div>
  );
};

export default TaskItem;

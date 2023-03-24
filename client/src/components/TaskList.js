import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskStatusChange, onTaskAssigneeChange }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onTaskStatusChange={onTaskStatusChange}
              onTaskAssigneeChange={onTaskAssigneeChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

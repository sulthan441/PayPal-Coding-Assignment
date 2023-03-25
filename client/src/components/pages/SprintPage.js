import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SprintPage = () => {
  const [sprintTasks, setSprintTasks] = useState([]);
  const [sprintName, setSprintName] = useState('');

  useEffect(() => {
    const fetchSprint = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/sprints');

        console.log(response)
        
        setSprintTasks(response.data.data.task);
        setSprintName(response.data.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSprint();
  }, []);

  return (
    <div>
      <h1>{sprintName}</h1>
      {sprintTasks.length > 0 ? (
        <ul>
          {sprintTasks.map(task => (
            <li key={task._id}>{task.name} - {task.status}</li>
          ))}
        </ul>
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
};

export default SprintPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SprintPage = () => {
  const [sprintTasks, setSprintTasks] = useState([]);
  const [sprintName, setSprintName] = useState('');


  const getSprint = async()=>{
 try {
  let data = await axios.get('http://localhost:5000/api/sprints')
  console.log(data)
  setSprintTasks(data.tasks);
  setSprintName(data.name);
 
 } catch (err) {
console.log(err)
 }
  }

  useEffect(() => {
  /*   axios.get('https://localhost:5000/api/sprints')
      .then(res => {
        setSprintTasks(res.data.tasks);
        setSprintName(res.data.name);
      })
      .catch(err => {
        console.log(err);
      }); */
      getSprint();
  }, []);

  return (
    <div>
      <h1>{sprintName}</h1>
      <ul>
        {sprintTasks.map(task => (
          <li key={task._id}>{task.name} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default SprintPage;
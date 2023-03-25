import React, { useState, useEffect } from 'react';


import axios from 'axios';
import "../../App.css"
const UserPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks')
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = (event) => {
    const selectedUser = event.target.value;
    axios.get(`http://localhost:8000/api/tasks?user=${selectedUser}`)
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='task-assigned'>
      <h1>Tasks Assigned to User</h1>
      <select onChange={handleChange}>
        <option value="">Select User</option>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Type</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.type}</td>
              <td>{task.assignee}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;

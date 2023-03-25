import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';
const TaskList = () => {

const [tasks,setTasks] = useState([])

  console.log('hiee')

  const onTaskAssigneeChange = async(newAssignee, id) => {
    try {
      const updated = await axios.patch(`http://localhost:5000/api/tasks/${id}`,{
        assignee: newAssignee
      })
      console.log(updated)
        } catch (error) {
      console.log(error)
    }
  };
 const onTaskStatusChange=async(newStatus,id)=>{
  try {
    const updated = await axios.patch(`http://localhost:5000/api/tasks/${id}`,{
      status: newStatus
    })
    console.log(updated)
      } catch (error) {
    console.log(error)
  }
 }

  const getTasks = async()=>{
    try {
     let data = await axios.get('http://localhost:5000/api/tasks')
     setTasks(data.data)
     console.log(data)
    
    
    } catch (err) {
   console.log(err)
    }
     }
     useEffect(()=>{
      getTasks();
     },[onTaskAssigneeChange])

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
               handleStatusChange={onTaskStatusChange}
             
              handleAssigneeChange={onTaskAssigneeChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
const HomePage = () => {
  return (
    <div id='main-div'>
      <h1 className='heading'>Welcome to Never Forget</h1>
      <p id='description'>Never forget any task, bug or feature again. Keep track of everything in one place.</p>

      <div>
        <h2  className='heading'>Tasks</h2>
        <ul className='links'>
          <li><Link to="/tasks">View All Tasks</Link></li>
          <li><Link to="/tasks/new">Create a New Task</Link></li>
        </ul>
      </div>
      <div>
        <h2 className='heading' >Sprints</h2>
        <ul className='links'>
          <li  ><Link to="/sprints">View All Sprints</Link></li>
          <li><Link to="/sprints/new">Create a New Sprint</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

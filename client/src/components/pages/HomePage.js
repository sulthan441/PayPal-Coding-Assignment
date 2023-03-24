import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Never Forget</h1>
      <p>Never forget any task, bug or feature again. Keep track of everything in one place.</p>
      <div>
        <h2>Projects</h2>
        <ul>
          <li><Link to="/projects">View All Projects</Link></li>
          <li><Link to="/projects/new">Create a New Project</Link></li>
        </ul>
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          <li><Link to="/tasks">View All Tasks</Link></li>
          <li><Link to="/tasks/new">Create a New Task</Link></li>
        </ul>
      </div>
      <div>
        <h2>Sprints</h2>
        <ul>
          <li><Link to="/sprints">View All Sprints</Link></li>
          <li><Link to="/sprints/new">Create a New Sprint</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

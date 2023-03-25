import React from 'react';
import { Routes,Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import PageNotFound from './components/pages/PageNotFound';
import SprintPage from './components/pages/SprintPage';
import UserPage from './components/pages/UserPage';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/api/sprints' element={<SprintPage/>}/>
      <Route path='/tasks' element={<TaskList/>}/>
      <Route path='/tasks/new' element={<AddTaskForm/>} />
      <Route path='/sprints/new' element={<UserPage/>} />
      <Route path='*' element={<PageNotFound/>}/>  
    </Routes>
  );
}

export default App;
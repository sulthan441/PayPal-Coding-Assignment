import React from 'react';
import { Routes,Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import PageNotFound from './components/pages/PageNotFound';
import SprintPage from './components/pages/SprintPage';
import UserPage from './components/pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/sprints/:sprintId' element={<SprintPage/>}/>

      <Route path='/users/:userId' element={<UserPage/>} />
      <Route path='*' element={<PageNotFound/>}/>  
    </Routes>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Task from '../Tasks/Main'
import Feed from '../Feed/Main'
import Home from '../Home/Home';
export default function Router() {
  return (
    <React.Fragment>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/taskmanagement' element={<Task/>}/>
      <Route path='/feeds' element={<Feed/>}/>
      </Routes>
    </React.Fragment>
  );
}

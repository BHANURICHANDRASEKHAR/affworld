import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from '../Home/Home';
export default function Router() {
  return (
    <React.Fragment>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </React.Fragment>
  );
}

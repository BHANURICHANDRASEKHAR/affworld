import React, { useState } from 'react'
import Router from './Components/Navbar/Router'
import './App.css'
import Model from './Components/Login/Model'
export default function App(){
 //this is the Second Entry Component
  return(
 <React.Fragment>
 {/* this is the Router Component */}
 <Router/>
  
 <Model/>
</React.Fragment>
  )
}
export const ApiLink='http://localhost:5000'
// http://localhost:5000,https://affworld-tdwb.onrender.com
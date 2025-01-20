import React, { useState } from 'react'
import Router from './Components/Navbar/Router'
import './App.css'
import Model from './Components/Login/Model'
export default function App(){
 
  return(
 <React.Fragment>
 <Router/>
 <Model/>
</React.Fragment>
  )
}
export const ApiLink='http://localhost:5000'
import React, { useEffect } from 'react'
import Router from './Components/Navbar/Router'
import './App.css'
import Model from './Components/Login/Model'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App(){
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
 //this is the Second Entry Component
  return(
 <React.Fragment>
 {/* this is the Router Component */}
 <Router/>
  
 <Model/>
</React.Fragment>
  )
}
export const ApiLink='https://affworld-tdwb.onrender.com'
// http://localhost:5000,https://affworld-tdwb.onrender.com
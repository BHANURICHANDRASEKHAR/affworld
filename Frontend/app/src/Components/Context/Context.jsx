import React, { useState,useEffect } from 'react'
import getToken from './getToken.js';
import { useSelector } from 'react-redux';
export const UserContext=React.createContext();
export default function Context({children}) {
    const [user, setUser] = React.useState(null)
    const [flag,setFlag] = React.useState(false)
    const [show,SetShow]=useState(false)
    useEffect(()=>{
    const token=getToken();
    setUser(token);
  },[flag,show])
    console.log(user);
    return (
      <UserContext.Provider value={{ user, setUser,show,SetShow,flag,setFlag}}>
        {children}
      </UserContext.Provider>
    )
  }
  

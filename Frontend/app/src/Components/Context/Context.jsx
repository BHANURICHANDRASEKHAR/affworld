import React, { useState,useEffect } from 'react'
import getToken from './getToken.js';
import { useSelector } from 'react-redux';
export const UserContext=React.createContext();
export default function Context({children}) {
    const [user, setUser] = useState(null)
    const [flag,setFlag] = useState(false)
    const [tasks, setTasks] = useState([])
    const [Feeds,SetFeeds]=useState([])
    const [show,SetShow]=useState(false)
    useEffect(()=>{
    const token=getToken();
    setUser(token);
  },[flag,show])
    return (
      <UserContext.Provider value={{ user,tasks, Feeds,SetFeeds,setTasks, setUser,show,SetShow,flag,setFlag}}>
        {children}
      </UserContext.Provider>
    )
  }
  

import React, { useState,useContext } from 'react'
import Model from './Model';
import FeedsContainer from './FeedsContainer';
import { toast_fail } from '../alert/alert';
import { UserContext } from '../Context/Context';
export default function Main() {
  const [Postshow,setPostShow]=useState(false);
  const {user,show,SetShow}=useContext(UserContext)
  function OnOpenHandler()
  {
    if(!user)
    {
      toast_fail('You need to Login first')
      SetShow(true);
    }
    else{
      setPostShow(true);
    }
  }
  return (
    <div  className='container' style={{marginTop:'2cm'}}>
    <Model show={Postshow} SetShow={setPostShow}/>
    <div className='d-flex justify-content-end'>    <button onClick={OnOpenHandler} className='btn btn-primary'>Post a Feed</button>
    </div>
    <FeedsContainer />
    </div>
  )
}

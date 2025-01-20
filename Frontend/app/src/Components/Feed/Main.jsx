
import React, { useState } from 'react'
import Model from './Model';
import FeedsContainer from './FeedsContainer';
export default function Main() {
  const [show,setShow]=useState(false);
  return (
    <div  className='container' style={{marginTop:'2cm'}}>
    <Model show={show} SetShow={setShow}/>
    <div className='d-flex justify-content-end'>    <button onClick={()=>{setShow(true)}} className='btn btn-primary'>Post a Feed</button>
    </div>
    <FeedsContainer />
    </div>
  )
}

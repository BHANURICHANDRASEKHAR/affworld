import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../Context/Context'
export default function Home() {
    const {show,setShow}=useContext(UserContext)
  return (
    <div className='container mt-5 bg-danger'>
   <h1>eghdgbh</h1>
    <Button variant='primary' onClick={()=>{setShow(!show)}}>onClick</Button>
    </div>
  )
}

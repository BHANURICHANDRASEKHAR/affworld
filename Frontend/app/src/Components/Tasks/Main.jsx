import React from 'react'
import Input from '../Login/Input'
import Form from '../Tasks/Form'
import TasksContainer from './TasksContainer'
export default function Main() {
  return (
    <div className='container' style={{marginTop:'2cm'}}>
    <Form/>
    <TasksContainer/>
    </div>
  )
}
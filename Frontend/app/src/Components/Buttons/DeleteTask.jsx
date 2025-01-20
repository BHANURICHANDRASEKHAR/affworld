import React,{useContext, useState} from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { UserContext } from '../Context/Context';
import {Popconfirm} from 'antd'
import {Delete_Task} from '../Tasks/SubmitTask.js'
export default function DeleteTask({index}) {
   const {user,tasks, setTasks} =useContext(UserContext)
   const [Loading,SetLoading] = useState(false)

   console.log(index)
    function confirm()
    {
        Delete_Task(SetLoading,setTasks,tasks,user,index)
    }
  return (
    <div className='col-2 fs-1'>
    <Popconfirm 
        title="Delete the Task"
        description="Are you sure to delete this Task?"
        onConfirm={() => {confirm() }}
        style={{ width: '100px' }}
        okText="Yes"
        cancelText="No"
        placement="leftBottom">
        <FcDeleteDatabase/>
    </Popconfirm>
    </div>  )
}

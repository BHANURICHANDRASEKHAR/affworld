import React,{useContext, useState} from 'react'
import Input from '../Login/Input'
import { UserContext } from '../Context/Context'
import TaskSubmission from './SubmitTask'
import Loader from '../Buttons/Loader'
export default function Form() {
    const [data, setData] = useState({
        TaskName: '',
        Description: '',
        status:'Pending',
    })
    const {user, setUser,tasks,show,SetShow, setTasks} =useContext(UserContext)
    const [Loading,setLoading]=useState(false)
    const onHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }
    function Submit(e)
    {
        e.preventDefault();
        TaskSubmission(setLoading,setTasks,data,user,SetShow,tasks);
        setData({
            TaskName: '',
            Description: '',
            status:'Pending',
        })
    }
  return (
    <div className='row '>
    <div className='col-sm-5 mt-1'>
    <Input
        lable='Task Name'
        placeholder='Enter Task Name'
        name='TaskName'
        type='text'
        handler={onHandler}
        value={data.TaskName}
    />
    </div>
    <div className='col-sm-5 mt-1'>
    <Input
        lable='Description'
        placeholder='Enter Description'
        name='Description'
        type='text'
        handler={onHandler}
        value={data.Description}
    />
    </div>
    <div className='col-sm-2 d-flex justify-content-center'>
  <div className='mt-4 mb-1'>
    <button type='submit' className='btn btn-primary mt-4 w-100' onClick={(e)=>Submit(e)}>
     {Loading ? 'Loading..' :'Submit'}  
    </button>
  </div>
</div>

    </div>
  )
}

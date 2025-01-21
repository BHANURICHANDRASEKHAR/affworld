import axios from 'axios'
import { ApiLink } from '../../App'
import { toast_fail,toast_success } from '../alert/alert'
async function Submit_Task(setLoading,setData,task,token,SetShow,data)
{
   if(token)
   {
     if(validate(task))
    {
        setLoading(true)
        const res=await axios.post(`${ApiLink}/tasks/post`,{
            task: task
        },{headers: {
                'x-token': token
            }})
        if(res.data.status)
        {
            toast_success("Task successfully submitted")
            setData([...data,task])

        }
        else
        {
            toast_fail(res.data.msg)
        }
        setLoading(false)
    }
   }
   else{
    toast_fail('Please Login First')
    SetShow(true)
   }

}
function validate(data)
{
    if(data.TaskName.trim().length==0 || data.Description.trim()==0)
    {
        toast_fail('Please fill All required fields');
        return false;
    }
    return true;
}
export async function Get_Tasks(setLoading,setTasks,token)
{
   if(token)
   {
    try{
        setLoading(true)
        const res=await axios.get(`${ApiLink}/tasks/get`,{headers: {
            'x-token': token
        }})
        if(res.data.status)
        {
           
            setTasks(res.data.data)
        }
        else
        {
            toast_fail(res.data.msg)
        }
        setLoading(false)
    }
    catch(err)
    {
       
        toast_fail('Failed to fetch tasks')
    }
    finally{
        setLoading(false)
    }
   }
}
export async function Update_Tasks(token, task,UpdatedStatus)
{
    
   if(token)
   {
    try{
        
        const res=await axios.post(`${ApiLink}/tasks/update`,{task,UpdatedStatus},{headers: {
            'x-token': token
        }})
        if(!res.data.status)
        {
            toast_fail(res.data.msg)
        }
        
    }
    catch(err)
    {
       
        toast_fail('Failed to fetch tasks')
    }
   
   }
}
export default Submit_Task;
export async function Delete_Task(SetLoading,SetTask,Task,token,index)
{
    if(token)
    { 
        try{
            const res=await axios.post(`${ApiLink}/tasks/delete`,{task_id:Task[index]._id},{
                headers: {
                    'x-token': token
                }
            })
            
            if(res.data.status)
            {
                const newTask = [...Task];
                newTask.splice(index, 1);
                SetTask(newTask);
                toast_success('Task deleted successfully');
            }
            else{
                toast_fail(res.data.msg)
            }
        }
        catch(err)
        {
           
            toast_fail('Failed to delete task')
        }
        finally{
           SetLoading(false)
        }
        }
}
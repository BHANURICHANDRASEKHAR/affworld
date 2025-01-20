import axios  from "axios";
import { toast_fail, toast_success } from "../alert/alert.js";
export default async function  mailfunction(setLoading,setotpflag,setOtp,data)
{
    setLoading(true);
  const res=await axios.post('https://attendance-app-0kvp.onrender.com/sendmail',{
        email: data.email,
    })
    if(res.data.status)
    {
     setOtp(res.data.otp)
     toast_success(res.data.msg)
      setotpflag(true)
    }
   else{
    console.log(res)
    toast_fail(res.data.msg)
   }
   setLoading(false);
}

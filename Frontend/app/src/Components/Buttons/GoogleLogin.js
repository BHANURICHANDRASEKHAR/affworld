import axios from "axios";
import { ApiLink } from "../../App";
import {toast_fail } from "../alert/alert";
import {storeCookie} from '../Login/loginmod.js'
async function GoogleLogin(response,SetShow)
{
    try{
    const res=await axios.post(`${ApiLink}/auth/google`,{token:response.credential})
     if(res.data.status)
    {
        storeCookie(res.data.token)
        SetShow(false);   
    }
    else{
       toast_fail(res.data.msg)
    }
    }
    catch(err)
    {
        console.log(err)
        toast_fail('Login failed')

    }
    
}
export default GoogleLogin;
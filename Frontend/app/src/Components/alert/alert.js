import { toast } from "react-toastify";
//alerts for users 
export function toast_success(msg)
{
    toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      
        });
}
export function toast_fail(msg)
{
    toast.error(msg, {
        pposition: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",

        });
}
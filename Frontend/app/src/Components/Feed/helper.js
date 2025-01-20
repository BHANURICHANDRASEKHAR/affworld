import axios from "axios";
import { toast_fail,toast_success } from "../alert/alert";
import { ApiLink } from "../../App";
export default async function Upload_posts(setLoader,data,token,Feedsdata,SetFeedData)
{
  if(check(data))
   {
    setLoader(true)
    const ImageLink=await UploadImage(data)
    try{
        const res=await axios.post(`${ApiLink}/feeds/post`,{caption:data.caption,ImageLink:ImageLink},{
            headers: {
               'x-token':token
            },
        })
        if(res.data.status)
        {
            toast_success('Post uploaded successfully')
            SetFeedData([...Feedsdata,[{caption:data.caption,Img:ImageLink}]])
            setLoader(false)
        }
        else
        {
            toast_fail('Failed to upload post')
            setLoader(false)
        }
    }
    catch(err)
    {
        toast_fail('Failed to upload post')
        setLoader(false)
    }
   }
}
function check(data){
    if(data.caption.trim().length==0)
    {
        toast_fail('Please Validate caption')
        return false;
    }
    if(data.img=='' )
    {
        toast_fail('Please select an image')
        return false;
    }
    return true;
}
async function UploadImage(data) {
    if (!data.img) {
        console.error("No image file provided");
        return;
    }

    const formData = new FormData();
    formData.append('file', data.img); // Make sure data.img is a valid file
    formData.append('upload_preset', 'affworld'); // Your upload preset
    formData.append('cloud_name', 'dc8wwkloy');  // Your cloud name
    
    try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dc8wwkloy/image/upload', formData);
        
        return res.data.secure_url;  
    } catch (err) {
        console.error('Upload error:', err.message);
        return null;
    }
}
export async function GetFeeds(SetLoading,SetFeeds)
{
    SetLoading(true)
    try{
        const res=await axios.get(`${ApiLink}/feeds/get`)
        SetFeeds(res.data.data)
        SetLoading(false)
    }
    catch(err)
    {
        SetLoading(false)
        toast_fail('Failed to fetch feeds')
    }
}
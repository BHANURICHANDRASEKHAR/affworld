import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { GiCancel } from "react-icons/gi";
import Input from '../Login/Input';
import Upload_posts from './helper'
import { UserContext } from '../Context/Context';
function Example({show,SetShow}) {
  const handleClose = () => {
    SetShow(false);
  };
  const [feedData,SetFeedData]=useState({
    caption:'',
    img:'',
})
 const {user,Feeds,SetFeeds} =useContext(UserContext)

const [Loading,SetLoading] = useState(false)
async function submit(e)
{
    e.preventDefault();
    await Upload_posts(SetLoading,feedData,user,Feeds,SetFeeds);
    SetFeedData({caption:'',img:''})
    SetShow(false)
    
}
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>  
        <Modal.Header>
          <div className="d-flex w-100">
            <GiCancel 
              onClick={handleClose} 
              style={{ cursor: 'pointer' }} 
              className="ms-auto"
              size={25}
            />
          </div>
        </Modal.Header>
        <Modal.Body><Data feedData={feedData} SetFeedData={SetFeedData}/></Modal.Body>
        <Modal.Footer>
        <div className="d-flex w-100 justify-content-center align-content-center"> <Button onClick={submit} disabled={Loading}  variant='primary' className='w-100'>{Loading ? 'Uploading ...': 'Upload'}</Button></div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(Example);
const Data=({SetFeedData,feedData})=>{
   
    const onHandler=(e)=>{
        const {name,value}=e.target
        SetFeedData({...feedData,[name]:value})
    }
    const handleFileChange=(e)=>{
        SetFeedData({...feedData,'img':e.target.files[0]})
        console.log(e.target.files[0])
    }
    return (
        <React.Fragment>
        <Input
            lable='Enter Caption'
            placeholder='e.g hi'
            name='caption'
            type='text'
            handler={onHandler}
            value={feedData.caption}
    />
      <div className='mt-4'>
      <label className='mb-2'>Upload a Image</label>
      <input type="file" className='w-100' onChange={handleFileChange} /></div>
        </React.Fragment>
    )
}

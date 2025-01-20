import React,{useContext,useEffect, useState} from 'react'
import { UserContext } from '../Context/Context'
import {GetFeeds} from './helper'
import Loader from '../Buttons/Loader'
import NoData from '../Tasks/NoData'
export default function FeedsContainer() {
     const {Feeds,SetFeeds} =useContext(UserContext)
     const [Loading,SetLoading]=useState(false)
     useEffect(()=>{
       if(Feeds.length==0)
       {
        GetFeeds(SetLoading,SetFeeds)
       }
     },[])
     if(Loading)
     {
        return <Loader />
     }
  return (
    <div className='row'>
     {
       Feeds.length>0?
       Feeds.map((feed)=>(
         <div className='col-md-4' key={feed._id}>
            <div className='card p-2'>
             <img className='card-img-top' src={feed.Img} alt='Card image cap'/>
             <div className='card-body'>
                <h5 className='card-title text-center text-capitalize'>{feed.caption}</h5>
             </div>
            </div>
         </div>
       ))
       :
       <div style={{height:'100vh',width:'100%',objectFit:'contain'}}><NoData /></div>
     }
    </div>
  )
}

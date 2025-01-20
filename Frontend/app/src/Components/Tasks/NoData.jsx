import React from 'react'
import img from '../../assets/noData.gif'
export default function NoData() {
  return (
    <img src={img} className='w-100 h-100' style={{height:'100vh',width:'100%',objectFit:'contain'}}/>
  )
}

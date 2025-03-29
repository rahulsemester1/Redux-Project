import React,{useEffect,useState} from 'react'
import {RotateLoader} from "react-spinners";

const Success = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[]) 
  return (
    
    <div className='flex flex-col justify-center items-center h-screen'>
      { loading ? <RotateLoader color="#54b178"/> :
      <div>
        <h1 className='text-3xl  text-center'>Order Successful!</h1><p>Your order has been successfully placed</p>
      </div>
       }
    </div>
  
  )
}

export default Success
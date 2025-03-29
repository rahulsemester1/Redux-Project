import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"

import { IoMdClose } from "react-icons/io";
import CartItems from './CartItems';
import { IoMdCart } from "react-icons/io";


const Cart = () => {
  const cartProducts=useSelector((state)=>state.cart.cart);
 const navigate=useNavigate();
  
  const [cartSlide,setCartSlide]=useState(false);
  const totalQty=cartProducts.reduce((totalQty,item)=>totalQty+item.qty,0);
  const amt=cartProducts.reduce((total,item)=>total+item.qty*item.price,0);
 
  // console.log(cartProducts);
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full overflow-y-auto bg-white p-5 ${cartSlide?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
      <div className='flex justify-between items-center my-3  '>
         <span className='text-xl font-bold text-gray-800'>My Orders</span>
         <IoMdClose onClick={()=>setCartSlide(!cartSlide)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md 
         hover:text-red-400 hover:border-red-400 cursor-pointer'/>
      </div>

      { cartProducts.length>0 ? cartProducts.map((item)=>{
        return <CartItems key={item.id} item={item}  /> 
       }):
         <h2 className='text-xl text-center font-bold text-gray-800'>Cart is empty</h2>}
      
      

      <div className='absolute bottom-0'>
         <h3 className='font-semibold text-gray-800'>Items:{totalQty}</h3>
         <h3 className='font-semibold text-gray-800'>Total Amount:₹{amt}</h3>
         <hr className='w-[93vw] lg:w-[40vw] my-2'/>
         <button onClick={()=>navigate("success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[93vw] lg:w-[18vw] mb-5'>
            Checkout
         </button>
      </div>
    </div>
    <div className='absolute'>
      <IoMdCart onClick={()=>(setCartSlide(!cartSlide))} 
      className={`rounded-full  bg-white shadow-md text-5xl p-3 fixed bottom-8 right-5 cursor-pointer 
      ${totalQty>0 && "animate-bounce delay-500 "}`}/>

       {/* <div className='relative bottom-16 left-110 '>
        <h2>{totalQty}</h2>
      </div> */}
      </div>
     
      </>
  )
}

export default Cart
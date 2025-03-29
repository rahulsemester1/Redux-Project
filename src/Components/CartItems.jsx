import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Slices/CartSlice';
import { incrementCart } from '../redux/Slices/CartSlice';
import { decrementCart } from '../redux/Slices/CartSlice';

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


const CartItems = ({item}) => {
   let {id,name,description,price,rating,qty,image}=item;
   const dispatch=useDispatch();
  // console.log(name);
  return (
   <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
   <MdDelete onClick={()=>{
    dispatch(removeFromCart({id}));
    toast(<div className="text-red-600 ">{`Item ${name} Removed Successfully !`}</div>, {
      icon: '👏',
    });
   }} 
    className="absolute right-7 text-gray-600 cursor-pointer hover:text-red-400 hover:scale-110"
   />
   <img src={image} alt="" className="w-[50px] h-[50px] "/>
   <div className="leading-5">
     <h2 className="font-bold text-gray-800">{name}</h2>
     <div className="flex justify-between ">
       <span className="text-green-500 font-bold">₹{price}</span>
       <div className="flex justify-center items-center gap-2 absolute right-7">
         <AiOutlineMinus onClick={()=>qty>1 ? dispatch(decrementCart({id})): qty=0} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
         />
         <span>{qty}</span>
         <AiOutlinePlus onClick={()=>qty>=1 ? dispatch(incrementCart({id})):qty=0} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
         />
       </div>
     </div>
   </div>
 </div>
  )
}

export default CartItems
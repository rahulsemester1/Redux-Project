import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';



const FoodCard = (foodValues) => {
  const {id,name,price,description,rating,image,handleToast}=foodValues;
  const dispatch=useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-4 flex flex-col rounded-lg gap-2 '>
      <div>
      <img className="w-[230px] h-[170px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out " 
      src={image || "https://images.unsplash.com/photo-1585703900468-13c7a978ad86?w=480&auto=format&fit=crop"} alt={name}
      onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1585703900468-13c7a978ad86?w=480&auto=format&fit=crop"} />
      </div>
      {/* 2nd part */}
      <div className='text-sm flex justify-between  p-1 '>    
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{description}</p>
      <div className='flex justify-between'>
      <span className='flex items-center'>
        <FaStar  className='mr-1 text-yellow-400'/>{rating}
        </span>
      <button onClick={()=>{
        dispatch(addToCart({id,name,price,description,rating,image,qty:1}));
        handleToast(name);
      }}
          className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg'>
            Add to cart
      </button>
      </div>
      
    </div>
  )
}

export default FoodCard
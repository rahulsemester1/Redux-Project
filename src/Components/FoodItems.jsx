import React from 'react'
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import FoodCard from './FoodCard'
import data from "../data.js"


const FoodItems = () => {
   const categories=useSelector((state)=>state.Category.category);
   const searchInput=useSelector((state)=>state.search.search);
   const handleToast=(name)=>{
    toast.success(`Item ${name} Added Successfully!`);
  }
  return (
    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <div className='flex flex-wrap gap-10 mx-6 my-10   justify-center lg:justify-start'>
      {
        data.filter((food)=>{
        if(categories==="All"){
          return food.name.toLowerCase().includes(searchInput.toLowerCase()); 
        }else{
          return categories===food.category && food.name.toLowerCase().includes(searchInput.toLowerCase());
        }}).map((food)=>{
            return(
            <FoodCard key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            description={food.description}
            rating={food.rating}
            image={food.imageUrl}
            handleToast={handleToast} />
        )})
}
    </div>
      </>
  )
}




export default FoodItems
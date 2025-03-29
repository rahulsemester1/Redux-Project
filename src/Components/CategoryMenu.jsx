import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';

import foodProducts from '../data';
import { setCategoryButton } from '../redux/Slices/CategorySlice';


const CategoryMenu = () => {
   const [categories,setCategories]=useState([]);
   const dispatch=useDispatch();
   const selectedCategory=useSelector((state)=>state.Category.category);

//new Set-Object() that doesn't store duplicate values(of any tyoe ie primitives and objects)

   const listUniqueCategories=()=>{
       const uniqueVal=[...new Set(foodProducts.map((food)=>food.category))];
       setCategories(uniqueVal); 
}
useEffect(()=>{
   listUniqueCategories(); 
},[])

// useEffect(()=>{
//    console.log(categories);
// },[categories])

  return (
    <div className='ml-6'>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden '>

         {/* All button */}
         <button onClick={()=>dispatch(setCategoryButton("All"))} 
         className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  
         ${selectedCategory==="All" && "bg-green-500"}`}>
            All
         </button>

         {/* category buttons except all */}
       {categories.map((category,index)=>{
          return <button onClick={()=>dispatch(setCategoryButton(category))} key={index} 
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white 
          ${selectedCategory===category && "bg-green-500"}`}>
          {category}
       </button>
      })        
   } 
 </div>
    </div>
  )
}

export default CategoryMenu
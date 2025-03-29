import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodCard from '../Components/FoodCard'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
   <>
   <Navbar/>
   <CategoryMenu/>
   <FoodItems/>
   <Cart/>
   </>
  )
}

export default Home
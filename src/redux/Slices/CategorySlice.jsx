import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CategorySlice =createSlice({
   name:"category",
   initialState:{
      category:"All",
   },
   reducers:{
      setCategoryButton:(state,action)=>{
         state.category=action.payload;
      }
   }
})
export default CategorySlice.reducer;
export const {setCategoryButton}= CategorySlice.actions;

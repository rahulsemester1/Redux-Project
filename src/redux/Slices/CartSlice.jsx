import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CartSlice=createSlice({
   name:"ShoppingCart",
   initialState:{
      cart:[],
   },
   reducers:{
      addToCart:(state,action)=>{
         const existingItem=state.cart.find((item)=>item.id===action.payload.id);
         if(existingItem){
            state.cart=state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty+1} : item);  
         }else{
            state.cart.push(action.payload);
         }        
      },
      removeFromCart:(state,action)=>{
         state.cart=state.cart.filter((item)=>item.id !== action.payload.id);
      },
      incrementCart:(state,action)=>{
         state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item);
      },
      decrementCart:(state,action)=>{
         state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)
      }
   }

})

export default CartSlice.reducer;
export const{addToCart,removeFromCart,incrementCart,decrementCart}=CartSlice.actions; 
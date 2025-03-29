import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
   name:"search",
   initialState:{
      search:"",
   },
   reducers:{
      setSearch:(state,action)=>{
      state.search=action.payload;
   }
}
})
 
export default SearchSlice.reducer;
export const {setSearch}=SearchSlice.actions;
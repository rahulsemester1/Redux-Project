import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "../redux/Slices/CartSlice"
import CategorySlice from "../redux/Slices/CategorySlice"
import SearchSlice from "../redux/Slices/SearchSlice"


const store=configureStore({
   reducer:{
      cart:CartSlice,
      Category:CategorySlice,
      search:SearchSlice
   }
});
export default store;   
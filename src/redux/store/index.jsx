import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../slice/cartSlice";
import favoriteSlice from "../slice/favoriteSlice";

const store = configureStore({
   reducer: {
      cart: cartSlice,
      favorite: favoriteSlice
   },
});

export default store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   favorite: [],
};

const favoriteSlice = createSlice({
   name: "favorite",
   initialState,
   reducers: {
      addToFavorite: (state, action) => {
         state.favorite.push(action.payload);
      },
   },
});

export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
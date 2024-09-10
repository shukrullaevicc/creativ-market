import { createSlice } from "@reduxjs/toolkit";

// Savatni localStorage'dan olish funksiyasi
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cart: getCartFromLocalStorage(),
  total: 0, // Total qiymatni boshqarish uchun
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const existingProduct = state.cart.find((product) => product.id === action.payload.id);

         if (existingProduct) {
            existingProduct.quantity += 1; // Mahsulot bor bo'lsa, o'sha mahsulotni +1 oshiradi
         } else {
            state.cart.push({ ...action.payload, quantity: 1 }); // Mahsulot yangi bo'lsa, 1 mahsulot sifatida qo'shadi
         }

         localStorage.setItem("cart", JSON.stringify(state.cart));
      },

      removeFromCart: (state, action) => {
         const existingProduct = state.cart.find((product) => product.id === action.payload.id);

         if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1; // Miqdorni kamaytiradi
         }
         else {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id); // Mahsulotni o'chiradi
         }

         localStorage.setItem("cart", JSON.stringify(state.cart));
      },

      calculateTotals: (state) => {
         const totalPrice = state.cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
         state.total = totalPrice;
      },

      deleteCart: (state) => {
         state.cart = [];
         localStorage.removeItem("cart");
      },
   },
});

export const { addToCart, removeFromCart, calculateTotals, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
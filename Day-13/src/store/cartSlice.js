// import {createSlice} from "@reduxjs/toolkit";


// const cartSlice = createSlice(
//     {
//         name: "cartFoodWilla",
//         initialState: {
//             cart: [],
//             total: 0,
//         },
//         reducers: {
//             addToCart: (state, action) => {
//                 state.cart.push(action.payload);
//                 state.total += action.payload.defaultPrice ? action.payload.defaultPrice : action.payload.price;

//             },
//             removeFromCart: (state, action) => {
//                 state.cart = state.cart.filter((item) => item.id!== action.payload);
//                 state.total -= action.payload.defaultPrice ? action.payload.defaultPrice : action.payload.price;

//             },
//             clearCart: (state) => {
//                 state.cart = [];
//                 state.total = 0;
//             },
//         },

//     }
// )


// export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
// export default cartSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartFoodWilla",
    initialState: {
      cart: [],
      total: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        const existingItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingItemIndex !== -1) {
          // If item exists, increment quantity and update total price
          state.cart[existingItemIndex].quantity += 1;
          state.total += action.payload.defaultPrice
            ? action.payload.defaultPrice
            : action.payload.price;
        } else {
          // If item does not exist, add it to the cart
          state.cart.push({ ...action.payload, quantity: 1 });
          state.total += action.payload.defaultPrice
            ? action.payload.defaultPrice
            : action.payload.price;
        }
      },
      removeFromCart: (state, action) => {
        const itemToRemoveIndex = state.cart.findIndex(
          (item) => item.id === action.payload
        );
  
        if (itemToRemoveIndex !== -1) {
          const { defaultPrice, price, quantity } = state.cart[itemToRemoveIndex];
          state.total -= (defaultPrice ? defaultPrice : price) * quantity;
          state.cart.splice(itemToRemoveIndex, 1);
        }
      },
      clearCart: (state) => {
        state.cart = [];
        state.total = 0;
      },
    },
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  
import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice(
    {
        name: "cartFoodWilla",
        initialState: {
            cart: [],
            total: 0,
        },
        reducers: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
                state.total += action.payload.price;
            },
            removeFromCart: (state, action) => {
                state.cart = state.cart.filter((item) => item.id!== action.payload);
                state.total -= action.payload.price;
            },
            clearCart: (state) => {
                state.cart = [];
                state.total = 0;
            },
        },

    }
)


export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

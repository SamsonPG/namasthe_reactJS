import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const Store= configureStore(
    {
        reducer:{
            cartFoodWilla : cartSlice,
        }

        //An sample code
        // reducer: {
        //     restaurants: (state, action) => {
        //         switch (action.type) {
        //             case "ADD_RESTAURANT":
        //                 return [...state, action.payload];
        //             default:
        //                 return state;
        //         }
        //     }
        // },
        // middleware: (getDefaultMiddleware) =>{}


    }

)
export default Store;

/**
 *  Create Store
 *      -configureStore() -RTK
 * 
 * Provide my store to app
 *      -<Provider store={Store}> - import from react-redux
 * 
 * Slice
 *    -RTK-createSlice({
 *          name:"",
 *          initialState:
 *          reducers:{
 *              addItem:(state, action)=>{state= action.payload}
 *          }
 *      }) 
 *      export const{addItem, removeItem} = cartSlice.actions;
 *      export default cartSlice.reducer;
 * 
 * Put that Slice into Store
 *      -{
 *        reducer:{
 *              cart: cartSlice,
 *              user: userSlice
 *              }
 *       }     
 */

import {configureStore} from "@reduxjs/toolkit";


const Store= configureStore(
    {
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
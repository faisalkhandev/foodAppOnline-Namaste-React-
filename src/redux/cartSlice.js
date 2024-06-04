import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: ["pizza", "special pizza", "signature Pizza"]
    },

    reducers: {
        addCartItem: (state, action) => {
            state.item.push(action.payload)
        },
        removeCartItem: (state) => {
            state.item.pop()
        },
        clearCart: (state) => {
            state.item.length === 0
        }
    }

})


export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
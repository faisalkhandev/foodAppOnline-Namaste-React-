import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },

    reducers: {
        addCartItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeCartItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length === 0
        }
    }

})


export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
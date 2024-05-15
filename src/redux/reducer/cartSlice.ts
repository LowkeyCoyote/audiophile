import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface ItemState {
    idProduct : number;
    quantity : number;
    slug : string;
    price : string;
    cartName : string;
}

interface CartState {
    items : ItemState[]
}

const initialState : CartState = {
    items : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = []
        },
        increase: (state, action) => {
            const cartItem = state.items.find((item) => item.idProduct === action.payload);
            if(cartItem && cartItem.quantity < 99){
                cartItem.quantity = cartItem.quantity + 1
            }
        },
        decrease: (state, action) => {
            const cartItemIndex = state.items.findIndex((item) => item.idProduct === action.payload);
            if (state.items[cartItemIndex].quantity === 1) {
                state.items.splice(cartItemIndex, 1);
            } else {
                state.items[cartItemIndex].quantity -= 1;
            }
        },
        addToCart: (state, action : PayloadAction<ItemState>) => {
            const {idProduct, quantity} = action.payload
            const isInCartIndex = state.items.findIndex((item) => item.idProduct === idProduct);

            if(isInCartIndex !== -1){
                state.items[isInCartIndex].quantity += quantity;
            }
            else{
                state.items.push({...action.payload, quantity})
            }
        }
    }
})

export const {increase, decrease, addToCart, clearCart} = cartSlice.actions

export default cartSlice.reducer;


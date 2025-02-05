import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface cartState {
  cart: any[]
}

// Define the initial state using that type
const initialState: cartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action) =>{
        state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload, 1)
    },
    increaseQuantity: (state, action) =>{
      state.cart[action.payload].quantity += 1;
    },
  },
})

export const {addToCart, removeFromCart, increaseQuantity} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer
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
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },    
    increaseQuantity: (state, action) =>{
      state.cart[action.payload].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1); // Remove item if quantity is 1
      }
    },
  },
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart

export default cartSlice.reducer
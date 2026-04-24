import { createSlice } from "@reduxjs/toolkit";

// create a redux slice
const cartSlice = createSlice({
  name : "cart",
  initialState:{ // intial state is an object with items as an empty arrayq
    items:["burger", "pizza"],
  },
  reducers: { // reducers are functions that take the current state and an action as arguments and return a new state
    addItem:(state, action) => { // addItems is a reducer function taht map to an action 
      // mutating the state here 
      state.items.push(action.payLoad);
    },
    removeItems:(state) => { // here are the multiple small reducers function 
      // redux toolkit uses immer library to handle immutability, so we can directly mutate the state here
    state.items.pop();
    },
    // originalState = [pizza]
    // redux tookit says either mutate the existng state or return a new state
    clearCart:(state) => {
    // state.items.length = 0; // originalState = []  
    return {items: [] } // this new [] (arrray) will be replaced inside original state
    },
  },// reducers are basically modifying the state
});

// export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;
// export reducer
export default cartSlice.reducer;
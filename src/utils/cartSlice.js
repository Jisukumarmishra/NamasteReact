import { createSlice } from "@reduxjs/toolkit";

// create a redux slice
const cartSlice = createSlice({
  name : "cart",
  initialState:{ // intial state is an object with items as an empty arrayq
    items:["burger", "pizza"],
  },
  reducer: { // reducers are functions that take the current state and an action as arguments and return a new state
    addItem:(state, action) => { // addItems is a reducer function taht map to an action 
      // mutating the state here 
      state.items.push(action.payLoad);
    },
    removeItems:(state) => {
    state.items.pop();
    },
    clearCart:(state) => {
    state.items.length = 0;
    },
  },// reducer are basically modifying the state
});

// export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;
// export reducer
export default cartSlice.reducer;
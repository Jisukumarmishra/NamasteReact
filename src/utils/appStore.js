const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({ 
reducer:{ // this is one reducer to whole app, and its can contain multiple small reducvers
cart : cartReducer,
},
});

export default appStore;
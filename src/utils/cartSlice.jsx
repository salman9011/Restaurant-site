import { createSlice } from "@reduxjs/toolkit";
// it takes configurations  as we are  creating slice
const cartSlice = createSlice({
name :'cart',
initialState:{
  items:[]  
},
reducers:{
    addItem : (state,action) =>{
        //here we are mutating state over here , ie., modifying state here directly
        state.items.push(action.payload);
        // it will modify state based on action , state is actually the intial-state//
    },
    removeItem:(state)=>{
        state.items.pop();
    },
    clearCart:(state)=>{
        state.items.length=0;
    }
}
})
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
 
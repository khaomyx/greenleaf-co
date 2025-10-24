import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
name: 'cart',
initialState: { items: [] },
reducers: {
addToCart: (state, action) => {
const existing = state.items.find(i => i.id === action.payload.id);
if (!existing) state.items.push({ ...action.payload, quantity: 1 });
},
increase: (state, action) => {
const item = state.items.find(i => i.id === action.payload);
if (item) item.quantity++;
},
decrease: (state, action) => {
const item = state.items.find(i => i.id === action.payload);
if (item && item.quantity > 1) item.quantity--;
},
removeItem: (state, action) => {
state.items = state.items.filter(i => i.id !== action.payload);
},
},
});


export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
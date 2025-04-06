// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],       // { id, name, price, quantity }
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (!exists) {
        state.items.push({ ...item, quantity: 1 });
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    }
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
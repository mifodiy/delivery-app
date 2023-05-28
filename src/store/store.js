import { configureStore } from '@reduxjs/toolkit';

import shops from '../components/shopsList/shopsSlice';
import cart from '../components/cartList/cartSlice'

const store = configureStore({
  reducer: {shops, cart},
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
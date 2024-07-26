// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import { provider } from 'react-redux';
import { api } from '../services/api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/CounterSlice'
import { pokemonApi } from './services/pokemon'
import { authApi } from './services/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
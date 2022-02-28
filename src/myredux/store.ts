import { configureStore } from '@reduxjs/toolkit'
import productsSliceReducer from './productsSlice'

const store = configureStore({
  reducer: {
    products: productsSliceReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

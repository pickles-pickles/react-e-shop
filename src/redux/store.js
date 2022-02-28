import { configureStore } from '@reduxjs/toolkit'
import productsSliceReducer from './productsSlice'

export default configureStore({
  reducer: {
    products: productsSliceReducer
  }
})

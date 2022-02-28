import { createSlice } from '@reduxjs/toolkit'
import storeProducts from '../data'

const initialState = {
  storeProducts,
  cartItems: [],
  isModalOpen: false,
  modalProduct: {}
}
export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    handleAdd: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload]
    },
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen
    },
    handleProductModalAdd: (state, action) => {
      state.modalProduct = { product: action.payload }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        product => product.id !== action.payload.id
      )
    }
  }
})

export const {
  handleAdd,
  toggleModal,
  handleProductModalAdd,
  removeFromCart
} = productsSlice.actions
const productsSliceReducer = productsSlice.reducer
export default productsSliceReducer

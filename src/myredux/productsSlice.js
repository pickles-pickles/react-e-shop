import { createSlice } from '@reduxjs/toolkit'
import storeProducts from '../data'

const initialState = {
  storeProducts,
  cartItems: [],
  isModalOpen: false,
  modalProduct: {},
  isCheckoutModalOpen: false,
  detailsProduct: {}
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
      state.modalProduct = action.payload
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        product => product.id !== action.payload.id
      )
    },
    emptyCart: state => {
      state.cartItems = []
    },
    toggleCheckoutModal: state => {
      state.isCheckoutModalOpen = !state.isCheckoutModalOpen
    },
    showDetails: (state, action) => {
      state.detailsProduct = action.payload
    },
    increaseCount: state => {
      state.modalProduct = {
        ...state.modalProduct,
        count: state.modalProduct.count + 1
      }
    },
    decreaseCount: state => {
      state.modalProduct = {
        ...state.modalProduct,
        count: state.modalProduct.count - 1
      }
    }
  }
})

export const {
  handleAdd,
  toggleModal,
  handleProductModalAdd,
  removeFromCart,
  emptyCart,
  toggleCheckoutModal,
  showDetails,
  increaseCount,
  decreaseCount
} = productsSlice.actions
const productsSliceReducer = productsSlice.reducer
export default productsSliceReducer

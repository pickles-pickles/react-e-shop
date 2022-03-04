import { createSlice } from '@reduxjs/toolkit'
import storeProducts from '../data'

const initialState = {
  storeProducts,
  cartItems: [],
  isModalOpen: false,
  modalProduct: {},
  isCheckoutModalOpen: false,
  detailsProduct: {},
  onLoadAn: true
}
export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    handleAdd: (state, action) => {
      var flagIndx = -1

      /* loop in the cart products */
      for (let i = 0; i < state.cartItems.length; i++) {
        /*  if product already in cart, raise count */
        if (state.cartItems[i].id === action.payload.id) {
          state.cartItems[i].count += action.payload.count
          state.cartItems[i].total =
            state.cartItems[i].count * state.cartItems[i].price
          flagIndx = i
        }
      }
      if (flagIndx === -1) {
        state.cartItems = [...state.cartItems, action.payload]
        state.cartItems[state.cartItems.length - 1].total =
          state.cartItems[state.cartItems.length - 1].price *
          state.cartItems[state.cartItems.length - 1].count
      }
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
    },
    zeroCount: state => {
      state.modalProduct = {
        ...state.modalProduct,
        count: 0
      }
    },
    toggleOnLoadAn: state => {
      state.onLoadAn = false
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
  decreaseCount,
  zeroCount,
  toggleOnLoadAn
} = productsSlice.actions
const productsSliceReducer = productsSlice.reducer
export default productsSliceReducer

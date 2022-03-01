import { ProductType } from './productType'

type StateType = {
  products: {
    storeProducts: ProductType[]
    cartItems: ProductType[]
    isModalOpen: boolean
    modalProduct: ProductType
    isCheckoutModalOpen: boolean
    detailsProduct: ProductType
  }
}

export default StateType

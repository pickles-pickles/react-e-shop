import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleModal /* handleProductModalAdd */
} from '../../myredux/productsSlice'
/* import RootState from '../../myredux/store' */
/* import store from '../../myredux/store' */

/* type RootState = {
  isModalOpen: boolean
} */
/* type Props = {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  modalProduct: {
    id: number
    title: string
    img: string
    price: number
    company: string
    info: string
    inCart: boolean
    count: number
    total: number
  }
} */

const Modal = (/* setIsModalOpen, */) =>
  /* { */
  /* isModalOpen, */ /* modalProduct */
  /* }: Props */ {
    const dispatch = useDispatch()
    const isModalOpen = useSelector((state: any) => state.products.isModalOpen)
    const modalProduct = useSelector(
      (state: any) => state.products.modalProduct.product
    )
    return (
      <React.Fragment>
        {isModalOpen ? (
          <div className='modal'>
            <div className='container'>
              <div className='row'>
                <div
                  className='modal-inner col-8 mx-auto py-2 col-md-6 col-lg-4
                    text-center text-capitalize'
                >
                  <h5>item added to cart</h5>
                  <img
                    src={modalProduct.img}
                    alt='product'
                    style={{ maxWidth: '90%' }}
                  />
                  <h5>{modalProduct.title}</h5>
                  <button
                    className='myButton'
                    onClick={() => {
                      dispatch(toggleModal())
                    }}
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    )
  }

export default Modal
/* function state (state: any, arg1: (any: any) => any): any {
  throw new Error('Function not implemented.')
} */

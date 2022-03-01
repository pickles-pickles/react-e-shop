import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../myredux/productsSlice'
import StateType from '../../types/stateType'

const Modal = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(
    (state: StateType) => state.products.isModalOpen
  )
  const modalProduct = useSelector(
    (state: StateType) => state.products.modalProduct
  )
  return (
    <>
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
                    console.log(modalProduct)
                  }}
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
/* function state (state: any, arg1: (any: any) => any): any {
  throw new Error('Function not implemented.')
} */

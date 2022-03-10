import { db } from '../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import CheckoutModal from './modals/CheckoutModal'
import { ProductType } from '../types/productType'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart, toggleCheckoutModal } from '../myredux/productsSlice'
import store from '../myredux/store'
import StateType from '../types/stateType'

const Checkout = () => {
  const cartItems = useSelector((state: StateType) => state.products.cartItems)

  const dispatch: any = useDispatch()

  /* send cart to database */
  const saveMessage = async (cartItems: ProductType[]) => {
    try {
      await addDoc(collection(db, 'products'), { cartItems: cartItems })
    } catch (err) {
      alert(err)
    }
  }

  function findSum (cartItems: ProductType[]) {
    let sum = 0
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].total
    }
    return sum
  }
  return (
    <>
      <div className=' d-flex justify-content-center text-center'>
        <h1>You are about to buy your products</h1>
      </div>
      <div className=' d-flex justify-content-center'>
        <table className='col-8 col-md-6 table table-striped'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price(&euro;)</th>
              <th>Pieces</th>
              <th>Cost(&euro;)</th>
            </tr>
          </thead>

          {/* table with products */}

          <tbody>
            {cartItems.map((product: ProductType, key = product.id) => (
              <tr key={key}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>{product.total}</td>
              </tr>
            ))}
            <tr>
              <td>Total cost</td>
              <td colSpan={2}></td>
              <td className='text-left'>{findSum(cartItems)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          className='myButton black'
          onClick={() => {
            saveMessage(cartItems)
            console.log('cart items submitted', cartItems)
            dispatch(toggleCheckoutModal())
            console.log('isChoutModalOpen: ', store.getState())
            dispatch(emptyCart())
          }}
        >
          Buy Products
        </button>
      </div>
      <CheckoutModal></CheckoutModal>
    </>
  )
}

export default Checkout

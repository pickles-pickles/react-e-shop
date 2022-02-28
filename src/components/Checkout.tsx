import { db } from '../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import CheckoutModal from './modals/CheckoutModal'
import { ProductType } from '../types/productType'

type Props = {
  cartItems: ProductType[]
  setCartItems: (cartItems: ProductType[]) => void
  isCheckoutModalOpen: boolean
  setIsCheckoutModalOpen: (isCheckoutModalOpen: boolean) => void
}

const Checkout = ({
  cartItems,
  setCartItems,
  isCheckoutModalOpen,
  setIsCheckoutModalOpen
}: Props) => {
  /* send cart to database */
  const saveMessage = async (cartItems: ProductType[]) => {
    try {
      await addDoc(collection(db, 'products'), { cartItems: cartItems })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <div className=' d-flex justify-content-center text-center'>
        <h1>You are about to buy your products</h1>
      </div>
      <div className=' d-flex justify-content-center'>
        <table className='col-8 col-md-6 table table-striped'>
          <thead>
            {/* <tr>
              <th>My Order</th>
            </tr> */}
            <tr>
              <th>Product</th>
              <th>Price(&euro;)</th>
            </tr>
          </thead>

          {/* table with products */}

          <tbody>
            {cartItems.map((product, key = product.id) => (
              <tr key={key}>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center'>
        <button
          className='myButton black'
          onClick={() => {
            saveMessage(cartItems)
            setIsCheckoutModalOpen(true)
            setCartItems([])
          }}
        >
          Buy Products
        </button>
      </div>
      <CheckoutModal
        isCheckoutModalOpen={isCheckoutModalOpen}
        setIsCheckoutModalOpen={setIsCheckoutModalOpen}
      ></CheckoutModal>
    </>
  )
}

export default Checkout

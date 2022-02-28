import { Link } from 'react-router-dom'
import { ProductType } from '../types/productType'

type Props = {
  cartItems: ProductType[]
  setCartItems: (cartItems: ProductType[]) => void
}

const Cart = ({ cartItems, setCartItems }: Props) => {
  const removeFromCart = (productToRemove: any) => {
    setCartItems(cartItems.filter(product => product !== productToRemove))
  }

  return (
    <>
      {/* buttons */}
      {cartItems.length === 0 ? null : (
        <div className='row justify-content-center mt-5 mb-5'>
          <Link to='/checkout'>
            {' '}
            <button className='myButton yellow'>Checkout</button>
          </Link>

          <Link to='/'>
            <button className='myButton'>Return to products</button>
          </Link>
        </div>
      )}
      {/* products in cart */}
      <div className='row justify-content-center '>
        {cartItems.length === 0 ? (
          <h1>Your Cart is Empty</h1>
        ) : (
          cartItems.map((product, idx) => (
            <div className='col-4' key={idx}>
              <div className='card mt-3'>
                <img
                  src={product.img}
                  alt='product'
                  className='card-img-top p-2'
                ></img>
                <h4 className='mx-4'>{product.title}</h4>
                <p className='mx-4'>{product.price} $</p>
                <button
                  className='btn btn-warning'
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Cart

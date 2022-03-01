import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/productType'
import { removeFromCart } from '../myredux/productsSlice'
import StateType from '../types/stateType'

const Cart = () => {
  const cartItems = useSelector((state: StateType) => state.products.cartItems)
  const dispatch: any = useDispatch()

  return (
    <>
      {/* buttons */}
      {cartItems.length === 0 ? null : (
        <div className='row justify-content-center mt-5 mb-5 '>
          <Link to='/checkout'>
            {' '}
            <button className='myButton yellow '>Checkout</button>
          </Link>

          <Link to='/'>
            <button className='myButton black'>Return to products</button>
          </Link>
        </div>
      )}
      {/* products in cart */}
      <div className='row justify-content-center '>
        {cartItems.length === 0 ? (
          <h1>Your Cart is Empty</h1>
        ) : (
          cartItems.map((product: ProductType, idx: any) => (
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
                  onClick={() => {
                    dispatch(removeFromCart(product))
                    console.log(cartItems)
                    console.log('product: ', product)
                  }}
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

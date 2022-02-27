import React from 'react'

const Checkout = ({ cartItems }) => {
  return (
    <>
      <div className=' d-flex justify-content-center'>
        <h1>You are about to buy your products</h1>
      </div>
      <div className=' d-flex justify-content-center'>
        <table className='col-6 table table-striped'>
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
          className='myButton'
          onClick={() => console.log('Order sent to database')}
        >
          Buy Products
        </button>
      </div>
    </>
  )
}

export default Checkout

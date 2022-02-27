import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutModal = ({ isCheckoutModalOpen, setIsCheckoutModalOpen }) => {
  return (
    <React.Fragment>
      {isCheckoutModalOpen ? (
        <div className='modal'>
          <div className='container'>
            <div className='row'>
              <div
                className='modal-inner col-8 mx-auto py-2 col-md-6 col-lg-4
                      text-center text-capitalize'
              >
                <h5>Thanks for your purchase!</h5>
                <h6>
                  We will contact you as soon as we have an update on your order
                  status!
                </h6>
                <Link to='/'>
                  <button
                    className='myButton'
                    onClick={() => {
                      setIsCheckoutModalOpen(false)
                    }}
                  >
                    Return to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default CheckoutModal

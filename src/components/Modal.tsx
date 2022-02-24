import React from 'react'

type Props = {
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
}

const Modal = ({ isModalOpen, setIsModalOpen, modalProduct }: Props) => {
  return (
    <React.Fragment>
      {isModalOpen ? (
        <div id='modal'>
          <div className='container'>
            <div className='row'>
              <div
                id='modal-inner'
                className='col-8 mx-auto py-2 col-md-6 col-lg-4
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
                    setIsModalOpen(false)
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

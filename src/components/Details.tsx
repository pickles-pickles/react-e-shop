import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  handleAdd,
  toggleModal,
  handleProductModalAdd
} from '../myredux/productsSlice'
import StateType from '../types/stateType'

const Details = () => {
  const dispatch = useDispatch()
  const details = useSelector(
    (state: StateType) => state.products.detailsProduct
  )

  return (
    <React.Fragment>
      <div className='container'>
        <div className='card no-border mt-lg-4'>
          {details.id === undefined ? (
            <Link to='/'>
              <p className='text-center text-bright my-auto'>
                Please, select a product
              </p>
            </Link>
          ) : (
            <div className='row mx-2'>
              <div className='col-12 col-md-6 col-lg-4 text-bright'>
                <div className='img-container'>
                  <img
                    src={details.img}
                    alt='product'
                    className='card-img-top p-2'
                  ></img>
                </div>
                <h4 className='mx-4'>{details.title}</h4>
                <p className='mx-4'>{details.price} $</p>
              </div>
              <div className='col m-auto'>
                <div className='text-left'>
                  <p>{details.info}</p>
                </div>
                <button
                  className='myButton yellow'
                  onClick={() => {
                    dispatch(handleAdd(details))
                    dispatch(toggleModal())
                    dispatch(handleProductModalAdd(details))
                  }}
                >
                  Add to Cart
                </button>
                <Link to='/'>
                  <button className='myButton'>Return to products</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Details

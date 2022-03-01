import React from 'react'
import { Link } from 'react-router-dom'
import storeProducts from '../data'
import Product from './Product'
import { ProductType } from '../types/productType'
import { useDispatch } from 'react-redux'
import {
  handleAdd,
  toggleModal,
  handleProductModalAdd,
  showDetails
} from '../myredux/productsSlice'
import store from '../myredux/store'

/* type Props = { */
/* handleAdd: (product: ProductType) => void */
/* showDetails: (product: ProductType) => void */
/* setIsModalOpen: (isModalOpen: boolean) => void
  handleModalAdd: (product: ProductType) => void */
/* } */

const Products = (/* :  */) =>
  /* { */
  /* handleAdd, */
  /* showDetails */
  /* } */ /*  setIsModalOpen,
  handleModalAdd */
  /* Props */ {
    const dispatch: any = useDispatch()

    return (
      <div className='container'>
        <div>
          <div className=' row justify-content-center my-2'>
            <h1>This is HomePage (Products)</h1>
          </div>

          <div className='row justify-content-center mb-2'>
            {storeProducts.map(product => (
              <div key={product.id} className='card m-1 position-relative'>
                <Link to='/details' style={{ color: 'rgb(42, 114, 42)' }}>
                  <div
                    className=''
                    onClick={() => {
                      dispatch(showDetails(product))
                      console.log(product)
                    }}
                  >
                    <Product
                      title={product.title}
                      price={product.price}
                      img={product.img}
                    />
                  </div>
                </Link>

                <div className='position-absolute bottom-0 left-0'>
                  <button
                    className='myButton '
                    onClick={() => {
                      dispatch(handleAdd(product))
                      dispatch(toggleModal())
                      dispatch(handleProductModalAdd(product))
                      console.log('state must be changed: ', store.getState())
                      /*  handleAdd(product)
                    setIsModalOpen(true)
                    handleModalAdd(product) */
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default Products

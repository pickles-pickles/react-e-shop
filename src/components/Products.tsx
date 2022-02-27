import React from 'react'
import { Link } from 'react-router-dom'
import storeProducts from '../data'
import Product from './Product'
import { ProductType } from '../types/productType'

type Props = {
  handleAdd: (product: ProductType) => void
  showDetails: (product: ProductType) => void
  setIsModalOpen: (isModalOpen: boolean) => void
  handleModalAdd: (product: ProductType) => void
}

const Products = ({
  handleAdd,
  showDetails,
  setIsModalOpen,
  handleModalAdd
}: Props) => {
  return (
    <div className='container'>
      <div className=' row justify-content-center my-2'>
        <h1>This is HomePage (Products)</h1>
      </div>

      <div className='row justify-content-center mb-2'>
        {storeProducts.map(product => (
          <div key={product.id} className='card m-1 position-relative'>
            <Link to='/details' style={{ color: 'rgb(42, 114, 42)' }}>
              <div className='' onClick={() => showDetails(product)}>
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
                  handleAdd(product)
                  setIsModalOpen(true)
                  handleModalAdd(product)
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

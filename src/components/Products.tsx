import { Link } from 'react-router-dom'
import storeProducts from '../data'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleModal,
  handleProductModalAdd,
  showDetails,
  toggleOnLoadAn,
  increaseCount
} from '../myredux/productsSlice'
import store from '../myredux/store'
import StateType from '../types/stateType'
import { useEffect } from 'react'

const Products = () => {
  const dispatch: any = useDispatch()
  const onLoadAn = useSelector((state: StateType) => state.products.onLoadAn)

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleOnLoadAn())
    }, 5000)

    console.log('from use effect onLoadAn is', onLoadAn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoadAn])

  return (
    <div className='container bg-an'>
      <div className=' row justify-content-center my-2'>
        <h1 id='products-page-tile'>This is HomePage (Products)</h1>
      </div>

      <div className=' products-stage row justify-content-center mb-2'>
        {storeProducts.map(product => (
          /* product card */
          <div
            key={product.id}
            className={` card ${
              onLoadAn ? 'card-an' : null
            } m-1 position-relative col-10 col-md-3 col-lg-3 col-xl-2 `}
          >
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

            <div className='card-an position-absolute bottom-0 left-0'>
              <button
                className='myButton '
                onClick={() => {
                  dispatch(toggleModal())
                  dispatch(handleProductModalAdd(product))
                  dispatch(increaseCount())
                  console.log('state must be changed: ', store.getState())
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

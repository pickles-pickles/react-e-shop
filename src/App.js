import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Products from './components/Products'
import Details from './components/Details'
import Checkout from './components/Checkout'
import Modal from './components/modals/Modal'
//import { ProductProvider } from './context'

function App () {
  const [cartItems, setCartItems] = useState([])

  const [details, setDetails] = useState({})
  const showDetails = product => {
    setDetails(product)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState({})

  const handleAdd = product => {
    setCartItems([...cartItems, { ...product }])
  }

  const handleModalAdd = product => {
    setModalProduct(product)
  }

  return (
    <React.Fragment>
      {/*    <ProductProvider> */}
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Products
              handleAdd={product => handleAdd(product)}
              showDetails={product => showDetails(product)}
              setIsModalOpen={setIsModalOpen}
              modalProduct={modalProduct}
              handleModalAdd={product => handleModalAdd(product)}
            />
          </Route>
          <Route path='/cart'>
            <Cart setCartItems={setCartItems} cartItems={cartItems} />
          </Route>
          <Route path='/details'>
            <Details
              details={details}
              handleAdd={details => handleAdd(details)}
              handleModalAdd={details => handleModalAdd(details)}
              setIsModalOpen={setIsModalOpen}
            />
          </Route>
          <Route path='/checkout'>
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
              isCheckoutModalOpen={isCheckoutModalOpen}
              setIsCheckoutModalOpen={setIsCheckoutModalOpen}
            ></Checkout>
          </Route>
        </Switch>
        <Modal
          isModalOpen={isModalOpen}
          modalProduct={modalProduct}
          setIsModalOpen={setIsModalOpen}
        />
      </Router>
      {/*  </ProductProvider> */}
    </React.Fragment>
  )
}

export default App

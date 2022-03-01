import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Products from './components/Products'
import Details from './components/Details'
import Checkout from './components/Checkout'
import Modal from './components/modals/Modal'

function App () {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/checkout'>
            <Checkout></Checkout>
          </Route>
        </Switch>
        <Modal />
      </Router>
    </React.Fragment>
  )
}

export default App

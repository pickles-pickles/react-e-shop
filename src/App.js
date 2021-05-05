import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './components/Products';
import Details from './components/Details.jsx';
import { ProductProvider } from './context';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const [details, setDetails] = useState({});
  const showDetails = (product) =>{
    setDetails(
        product
    )
}

  const handleAdd = (product) => {
    setCartItems([...cartItems, { ...product },]);
  };

  return (
    <React.Fragment>
      <ProductProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Products handleAdd={(product) => handleAdd(product)}
                        showDetails={(product) => showDetails(product)} />
            </Route>
            <Route path="/cart">
              <Cart setCartItems={setCartItems} cartItems={cartItems} />
              </Route>
              <Route path="/details">
              <Details details={details} handleAdd={(details) => handleAdd(details)}/>
              </Route>
          </Switch>

        </Router>
      </ProductProvider>

    </React.Fragment>
  );
}

export default App;

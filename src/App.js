import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React, { useState } from 'react';
import storeProducts from './data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Main from './components/Main';
import { ProductProvider } from './context';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    console.log("added to cart", cartItems);
    setCartItems([...cartItems, { ...product },]);
  };

  return (
    <React.Fragment>
      <ProductProvider>
        <Router>
          <Header />
          
            <Switch>
              <Route exact path="/">
                <Main handleAdd={(product) => handleAdd(product)} />
              </Route>
              <Route to="/cart">
                <Cart setCartItems={setCartItems} cartItems={cartItems} />
              </Route>
            </Switch>
          
        </Router>
      </ProductProvider>

    </React.Fragment>
  );
}

export default App;

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React, { useState } from 'react';
import storeProducts from './data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import { ProductProvider } from './context';


function App() {

  const [products, setProducts] = useState(storeProducts);

  return (
    <React.Fragment>
      <ProductProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
        </Router>
      </ProductProvider>

    </React.Fragment>
  );
}

export default App;

import React, { Component } from 'react';

const ProductContext = React.createContext();

//Provider
const ProductProvider = (props) => {
    return ( 
        <ProductContext.Provider value="this is context">
            {props.children}
        </ProductContext.Provider>
     );
}
 
//Consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
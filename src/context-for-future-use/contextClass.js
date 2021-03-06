/* 
import React, { Component, useState } from 'react';
import storeProducts, { detailProduct } from './data';

const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {

    state={
        products: storeProducts,
        detailProduct: detailProduct,
    }

    handleDetail = () => {
        console.log("this is detail");
    }

    addToCart = () => {
        console.log("this is add to cart");
    }


    render() {
        return ( 
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider >
         );
    }
    
}
 
//Consumer
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
 */

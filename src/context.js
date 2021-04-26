import React, { useState } from 'react';
import storeProducts, { detailProduct } from './data';

export const ProductContext = React.createContext();
export const ProductProvider = (props) => {
    const [state,] = useState({
        products: storeProducts,
        detailProduct: detailProduct,
    })

    const handleDetail = () => {
        console.log("this is detail");
    }

    const addToCart = () => {
        console.log("this is add to cart");
    }

    return (
        <ProductContext.Provider value={{
            ...state,
            handleDetail: handleDetail,
            addToCart: addToCart,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
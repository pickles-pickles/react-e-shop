import React, {useState} from 'react';
import storeProducts from './data';

export const ProductContext = React.createContext();
export const ProductProvider = (props) => {
    const [state, ]= useState({
        products: storeProducts,
    })

    return(
        <ProductContext.Provider value={{
            ...state,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
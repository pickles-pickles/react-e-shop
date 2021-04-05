import React, { useEffect, } from 'react';
import Product from './Product';
import Title from './Title';
import storeProducts from '../data';
import { ProductConsumer } from '../context'

const ProductList = () => {


    useEffect(() => console.log(storeProducts), []);
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <Title name="our" title="products"></Title>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {(hello) => {
                                return <h1>{hello}</h1>
                            }}
                        </ProductConsumer>
                    </div>


                </div>
            </div>
            <Product />
        </React.Fragment>
    );
}

export default ProductList;
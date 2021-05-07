import React from 'react';
import {Link} from 'react-router-dom';
import storeProducts from '../data';
import Product from './Product';
const Products = ({ handleAdd, showDetails, setIsModalOpen, modalProduct, handleModalAdd }) => {

    return (
        <div className="container">
            <div className=" row justify-content-center my-2">
                <h1>This is MainPage (Products)</h1>
            </div>


            <div className="row justify-content-center mb-2">
                {storeProducts.map(product => (
                    <div key={product.id} className="card m-1 position-relative">
                        <Link to="/details">
                            <div className="" onClick={() => showDetails(product)}>
                                <Product title={product.title}
                                    price={product.price} handleAdd={handleAdd}
                                    img={product.img}
                                />
                            </div>
                        </Link>

                        <div className="position-absolute bottom-0 left-0">
                            <button className="myButton " 
                            onClick={() => { handleAdd(product); console.log("Modal to be created"); setIsModalOpen(true);
                        handleModalAdd(product); }}
                            >Add</button>
                        </div></div>
                ))}
            </div>
        </div>
    );
}

export default Products;
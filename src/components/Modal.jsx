import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, modalProduct }) => {
    return (
        <React.Fragment>
            {isModalOpen ?
                <div id="modal">
                    <div className="container">
                        <div className="row">
                            <div id="modal-inner" className="col-8 mx-auto py-2 col-md-6 col-lg-4
                    text-center text-capitalize">
                                <h5>item added to cart</h5>
                                <img src={modalProduct.img} />
                                <h5>{modalProduct.title}</h5>
                                <button className="myButton" onClick={()=> {setIsModalOpen(false)}} >Continue shopping</button>
                            </div>
                        </div>
                    </div>
                </div>

                :
                null}

        </React.Fragment>
    );
}

export default Modal;
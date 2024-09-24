import React from 'react';
import './pro.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';

const Products = () => {

    return(

        <div className="product">
            <Row>
                <div className="pro-images d-flex">
                    <div className="col-4">
                        <div className="pro-img1">
                            <div className="pro-text">
                                <h6 className='text-uppercase'>20% off all weeks</h6>
                                <h2 className='text-uppercase fw-semibold'>lamp decor</h2>
                                <a href="#" className='text-decoration-none text-uppercase'>shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="pro-img2">
                            <div className="pro-text">
                                <h6 className='text-uppercase'>top decor 2024</h6>
                                <h2 className='text-uppercase fw-semibold'>plant set</h2>
                                <a href="#" className='text-decoration-none text-uppercase'>shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="pro-img3">
                            <div className="pro-text">
                                <h6 className='text-uppercase'>top picks</h6>
                                <h2 className='text-uppercase fw-semibold'>new cabinet</h2>
                                <a href="#" className='text-decoration-none text-uppercase'>shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </div>

    )

}

export default Products;
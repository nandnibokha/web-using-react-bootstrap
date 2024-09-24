import './sale.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Icon from '../../assets/images/like.svg'

const Sale = () => {

    return(

        <div className="sale">
            <Row>
                <h2 className='text-uppercase fw-semibold text-center'>hot sales!</h2>
                <div className="sale-img d-flex justify-content-center">
                    <div className="col-3">
                        <div className="sale-img1 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>lucy counter</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>95.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img2 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>mulhouse coffee table</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>89.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img3 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>pim dining table</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>90.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img4 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>malibu desk chair</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>45.00$ - 50.00$</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-img d-flex justify-content-center">
                    <div className="col-3">
                        <div className="sale-img5 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>bolling tray table</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>100.00$ - 120.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img6 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>domino safe</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>150.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img7 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>jari dining chair</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>100.00$</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="sale-img8 sale-item">
                            <div className="box">
                                <span>-5%</span>
                            </div>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                        <div className="sale-text">
                            <span href="#" className='text-uppercase fw-semibold'>profana lamp</span>
                            <div className="price">
                                <a href="#" className='text-decoration-none'>200.00$</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </div>

    )

}

export default Sale
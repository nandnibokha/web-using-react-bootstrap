import './cat.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Img from '../../assets/images/cat1.jpg'
import Img2 from '../../assets/images/cat2.jpg'
import Img3 from '../../assets/images/cat3.jpg'
import Img4 from '../../assets/images/cat4.jpg'

const Category = () => {

    return(
        <div className="category">
            <Container fluid>
                <div className="bg">
                    <h2 className='text-uppercase text-center'>top furniture categories</h2>
                    <Row>
                        <div className="cat-img d-flex justify-content-center">
                            <div className="col-2 m-5">
                                <div className="img1">
                                    <img src={Img} alt="..." />
                                    <span className='text-uppercase fw-bold d-flex justify-content-center pt-4'>table</span>
                                </div>
                            </div>
                            <div className="col-2 m-5">
                                <div className="img2">
                                    <img src={Img2} alt="..." />
                                    <span className='text-uppercase fw-bold d-flex justify-content-center pt-4'>cabinet</span>
                                </div>
                            </div>
                            <div className="col-2 m-5">
                                <div className="img3">
                                    <img src={Img3} alt="..." />
                                    <span className='text-uppercase fw-bold d-flex justify-content-center pt-4'>sofa</span>
                                </div>
                            </div>
                            <div className="col-2 m-5">
                                <div className="img4">
                                    <img src={Img4} alt="..." />
                                    <span className='text-uppercase fw-bold d-flex justify-content-center pt-4'>stool</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Category
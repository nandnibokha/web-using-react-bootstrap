import './Comm.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Star from '../../assets/images/star.png'
import Profile1 from '../../assets/images/human1.jpg'
import Profile2 from '../../assets/images/human2.jpg'
import Profile3 from '../../assets/images/human3.jpg'

const Comment = () => {
    
    return(
        <div className="comments">
            <Container fluid>
                <Row>
                    <div className="commen d-flex">
                        <div className="col-4">
                            <div className="comm">
                                <div className="box">
                                    <div className="con">
                                        <div className="star">
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                        </div>
                                        <div className="content">
                                            <h2 className='fw-semibold'>“Uamo exceeded my expectations.”</h2>
                                            <p className='fw-semibold'>Let me start by saying, I love, love, love, Decorilla. Thanks so much for capturing my vision and bringing my ordinary space to a...</p>
                                            <div className="profile">
                                                <img src={Profile1} alt="" className='m-1 rounded-circle'/>
                                                <h2 className='fw-bold'>Jennifer D.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="comm">
                                <div className="box">
                                    <div className="con">
                                        <div className="star">
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                        </div>
                                        <div className="content">
                                            <h2 className='fw-semibold'>“absolutely loved uamo!!!!!”</h2>
                                            <p className='fw-semibold'>Apart from helping with the design and selecting pieces, Uamo helps with ordering, which is great and saves so much.</p>
                                            <div className="profile">
                                                <img src={Profile2} alt="" className='m-1 rounded-circle'/>
                                                <h2 className='fw-bold'>Denisse B.</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="comm">
                                <div className="box">
                                    <div className="con">
                                        <div className="star">
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                            <img src={Star} alt="" className='m-1'/>
                                        </div>
                                        <div className="content">
                                            <h2 className='fw-semibold'>“excellent peice of work”</h2>
                                            <p className='fw-semibold'>Let me start by saying, I love, love, love, Decorilla. Thanks so much for capturing my vision and bringing my ordinary space to a...</p>
                                            <div className="profile">
                                                <img src={Profile3} alt="" className='m-1 rounded-circle'/>
                                                <h2 className='fw-bold'>Evelyn Hanson</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )

}

export default Comment
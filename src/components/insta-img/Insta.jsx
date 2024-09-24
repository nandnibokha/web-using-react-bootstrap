import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import './insta.css'
import Img1 from '../../assets/images/insta1.jpg'
import Img2 from '../../assets/images/insta2.jpg'
import Img3 from '../../assets/images/insta3.jpg'
import Img4 from '../../assets/images/insta4.jpg'
import Img5 from '../../assets/images/insta5.jpg'
import Img6 from '../../assets/images/insta6.jpg'

const InstagramImages = () => {

    return(
        <div className="images text-center">
            <Container fluid>
                <Row>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img3} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img4} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img5} alt="" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="img">
                            <img src={Img6} alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )

}

export default InstagramImages
import './spo.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Logo1 from '../../assets/images/company1.png'
import Logo2 from '../../assets/images/company2.png'
import Logo3 from '../../assets/images/company3.png'
import Logo4 from '../../assets/images/company4.png'
import Logo5 from '../../assets/images/company5.png'
import Logo6 from '../../assets/images/company6.png'

const Company = () => {

    return(
        <div className="com d-flex justify-content-center">
            <Row>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo1} alt=""/>
                    </div>
                </div>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo2} alt=""/>
                    </div>
                </div>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo3} alt=""/>
                    </div>
                </div>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo4} alt=""/>
                    </div>
                </div>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo5} alt=""/>
                    </div>
                </div>
                <div className="col-2 p-5 mt-5">
                    <div className="com-img">
                        <img src={Logo6} alt=""/>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Company
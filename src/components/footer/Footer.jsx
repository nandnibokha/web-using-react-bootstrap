import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './footer.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import companyLogo from '../../assets/images/company-logo.png'

const Footer = () => {

    return(
        <Container>
            <div className="footer">
                <div className="heading">
                    <h3 className='text-uppercase text-center'>enjoy 15% off</h3>
                    <h2 className='text-uppercase text-center'>subscribe to our newsletter</h2>
                </div>
                <div className="d-flex justify-content-center"> {/* Centering the input box */}
                    <div className="email col-md-6">
                        <input type="email" className="form-control" placeholder="Enter your email address"/>
                    </div>
                </div>
                <div className="content d-flex">
                    <div className="col-3">
                        <div className="con">
                            <h4 className='text-capitalize'>company</h4>
                            <h5 className='text-capitalize'>showroom</h5>
                            <h5 className='text-capitalize'>our story</h5>
                            <h5 className='text-capitalize'>carrers</h5>
                            <h5 className='text-capitalize'>share your style</h5>
                            <h5 className='text-capitalize'>blog</h5>
                            <h5 className='text-capitalize'>giving back</h5>
                            <h5 className='text-capitalize'>print catalogs</h5>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="con">
                            <h4 className='text-capitalize'>company</h4>
                            <h5 className='text-capitalize'>showroom</h5>
                            <h5 className='text-capitalize'>our story</h5>
                            <h5 className='text-capitalize'>carrers</h5>
                            <h5 className='text-capitalize'>share your style</h5>
                            <h5 className='text-capitalize'>blog</h5>
                            <h5 className='text-capitalize'>giving back</h5>
                            <h5 className='text-capitalize'>print catalogs</h5>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="con-2">
                            <h5 className='text-capitalize'>free customer care</h5>
                            <h4 className='mb-4'>+1969 234 9852</h4>
                            <h5 className='text-capitalize'>need live support</h5>
                            <h4 className='mb-4'>info@example.com</h4>
                            <h5 className='text-capitalize'>address:</h5>
                            <h4>78 Marmora Road, Glasgow, D04 89GR</h4>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="con-3">
                            <h2 className='text-capitalize'>follow us</h2>
                            <div className="icon">
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-x-twitter"></i>
                            <i class="fa-brands fa-square-github"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
import React from 'react';
import './banner.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {

    return (
        <main>
            <div className="banner">
                <div className="banner-img">
                    <div className="banner-text">
                        <h6 className='text-uppercase'>now on sale!</h6>
                        <h1 className='text-uppercase'>desk decor</h1>
                        <p className='fw-semibold'>Every woman needs a wallet to keep her cards and cash<br/>organised. Find the perfect one for you in our extensive and<br/>varied range.</p>
                    </div>
                    <div className="button">
                        <a className='text-uppercase text-decoration-none'>shop now</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
import React from 'react';
import CoverImage from '../images/banner.jpg'; //used banner for largescreen
import MobileImage from '../images/MobileImage.jpg'; //used banner for smallscreen
import './homecover.css'; //import homecover css file
function Cover() {
    return (<div className="container-fluid">
        <div className="row">
            <img alt="Banner" className='banner' src={CoverImage} style={{height:'600px'}}/>
            <img alt="Banner" className='Mobilebanner' src={MobileImage} style={{height:'400px'}}/>
        </div>

    </div> );
}

export default Cover;
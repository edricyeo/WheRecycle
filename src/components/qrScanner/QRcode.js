import React from 'react';
import QR from "../../assets/images/QRcode.png"

const QRcode = () => {
    return (
        <>
                <div className='image'>
                    <h1>Your QR Code!</h1>
                    <img src={QR} alt = "QR"></img>
                    <h3>Scan your QRcode with the bin to collect your points!</h3>
                </div>
    
        </>
    );
}
export default QRcode;
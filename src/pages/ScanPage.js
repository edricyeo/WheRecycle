import React from 'react';
import Scanner from '../components/qrScanner/Scanner';
import QRcode from '../components/qrScanner/QRcode';

const ScanPage = () => {
    return (  
        <>
            <Scanner />
            <QRcode />
        </>
    );
};

export default ScanPage;

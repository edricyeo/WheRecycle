import React, {useState} from 'react';
import Navbar from '../Navbar';
import {QrReader} from 'react-qr-reader';

const Scanner = () => {
    const [data, setData] = useState('');
    return (
        <>
            <Navbar />
            <div className="main-cover">
                <div className='main-content'>
                    <h1 className="main-title">Scan Your Item!</h1>
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result.text);
                            }
                            if (!!error) {
                                console.log(error);
                            }
                        }}
                    />
                    <h3> Scanned Code: {data} </h3>
                </div>
            </div>
            
        </>
    );
};

export default Scanner;
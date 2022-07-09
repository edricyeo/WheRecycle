import React from 'react';

const Navbar = () => {
    return (
        <div className="nav">
            <h1 className="navInfoTitle">
                WheRecycle
            </h1>

            <div>
            <button
                className="navButton"
                onClick={() => (window.location.pathname = '/')}
            >
                HOME
            </button>

            <button
                className="navButton"
                onClick={() => (window.location.pathname = '/scan')}
            >
                SCAN
            </button>

            <button
                className="navButton"
                onClick={() => (window.location.pathname = '/map')}
            >
                MAP
            </button>
            </div>
            <button
                className="navButton"
                onClick={() => {localStorage.setItem('loginstatus','false'); window.location.reload();}}
            >
                LOGOUT
            </button>
        </div>
    );
};

export default Navbar;

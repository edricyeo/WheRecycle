import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import ScanPage from '../pages/ScanPage';
import KakaoMap from '../pages/KakaoMap';
import Login from '../components/Login/Login';

function CheckLoggedIn() {
    if (localStorage.getItem('loginstatus') === 'true') {
        return true;
    }
    return false;
}

function App() {
    const [token, setToken] = useState(CheckLoggedIn());
    if(!token) {
        return <Login setToken={setToken}/>
    } else {
        return (
            <>
                <Navbar />
                <BrowserRouter>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/map" component={KakaoMap} />
                    <Route path="/scan" component={ScanPage} />
                </BrowserRouter>
            </>
        );
    }
    
}

export default App;

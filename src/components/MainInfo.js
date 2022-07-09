import React, {Component} from 'react';
import greenwave from '../assets/images/greenwave.png';
import './Login/Login.css';

class MainInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redeem: 0,
            total_points: 1000,
            insufficient_balance: false,
            valid: false,
        }
    }

        handleClick = () => {
            if (this.state.insufficient_balance === false) {
                this.setState({total_points: this.state.total_points - this.state.redeem});
            }
        }

        redeemPoints = (e) => {
            this.setState({redeem: e.target.value});
            this.setState({insufficient_balance: e.target.value > this.state.total_points ? true : false})
            this.setState({valid: e.target.value < 0? true : false})
        }

        render() {
            return (
            <>
                <div className="main-cover">
                    <div className="main-content">
                        <h1 className="main-title">
                            Want to dispose your waste?      
                        </h1>   
                        <p className="main-sub-title">
                            Recycle your items in our smart bins and earn rewards!
                        </p>
                        
                        <h3>
                            Your points: {this.state.total_points}
                        </h3>
                        <input className="rounded-input" type="number" onChange={this.redeemPoints}/>
                        <div>
                        <button className="button-54" onClick={() => this.handleClick()}>Redeem</button>
                        {this.state.insufficient_balance && <p>Unable to redeem. You have insufficient balance.</p>}
                        {this.state.valid && <p>Please input a valid amount.</p>}
                        </div>
                    </div>
                </div>
                <img className="wave" alt="wave" src={greenwave} />
            </>
        );
    };
}

export default MainInfo;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [correctCredentials, setCorrectCredentials] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);


  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const handleregister = () => {
    if (username === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (password === confirmpassword && password !== "") {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
    if (password !== "" && username !== "" && password === confirmpassword) {
      localStorage.setItem("username",username);
      localStorage.setItem("password",password);
      window.location.reload();
    }
  }

  const handlelogin = () => {
    console.log("in handlesubmit");
    if ((username === localStorage.getItem('username') && password === localStorage.getItem('password'))) {
      setToken(true);
      localStorage.setItem('loginstatus','true');
      window.location.reload();
      return false;
    } else {
      setCorrectCredentials(true);
    }
    
    return false;
  }

  return(
    <div className="background">
      <h1 className="login-title">
                  WheRecycle
              </h1>
      {createAccount?
        <div className="create-account-wrapper">
        <h1 className="login-name">Please create your account</h1>
        <form className="login-form">
          <label>
            <p className="field-header">Username</p>
            <input className="rounded-input" type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          {usernameError && <p class="error">Please enter a username</p>}
          <label>
            <p className="field-header">Password</p>
            <input className="rounded-input" type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          {passwordError && <p class="error">Please enter a password</p>}
          <label>
            <p className="field-header">Confirm Password</p>
            <input className="rounded-input" type="password" onChange={e => setConfirmPassword(e.target.value)}/>
          </label>
          {confirmPasswordError && <p class="error">passwords do not match!</p>}
          <div className="submit-row">
            <button class="button-54" type="button" onClick={handleregister}>submit</button>
          </div>
        </form>
      </div>
        :
      <div className="login-wrapper">
        <h1 className="login-name">Please Log In</h1>
        <form className="login-form">
          {correctCredentials && <p class="error">Wrong Username or Password entered</p>}
          <label>
            <p className="field-header">Username</p>
            <input className="rounded-input" type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p className="field-header">Password</p>
            <input className="rounded-input" type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div className="submit-row">
            <button class="button-54" type="button" onClick={handlelogin}>Login</button>
            <button class="button-54" type="button" onClick={() => setCreateAccount(true)}>Signup</button>
          </div>
        </form>
      </div>}
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
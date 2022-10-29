import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

import './userInterface.css';

function UserInterface() {

  const [userInfo, setUserInfo] = useState({
    isLoggedIn : false,
    userName : '',
    email : '',
    password : '',
    alertMsg : ''
  })

  const navigate = useNavigate();



  
  
  const getInputToState = (e,inputField) => {
    
    
    
    
    
    switch(inputField){
      
      
      case 'username' : {
        setUserInfo(userInfo.userName = e.target.value);
        const newUserInfo = userInfo; // create new state object
        setUserInfo(newUserInfo);
        console.log(userInfo);
        break
      }
      case 'email' : {
        setUserInfo(userInfo.email = e.target.value);
        const newUserInfo = userInfo; // create new state object
        setUserInfo(newUserInfo);
        console.log(userInfo);
        break
      }
      case 'password' : {
        setUserInfo(userInfo.password = e.target.value) ;
        const newUserInfo = userInfo; // create new state object
        setUserInfo(newUserInfo);
        console.log(userInfo);
        break
      }
      default:
        return null
  
      }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    let namePattern = /[A-Za-z0-9]{3,16}./ ;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(userInfo.userName.match(namePattern) && userInfo.email.match(emailPattern) && userInfo.password.length >= 8){
      navigate("/");

      
    }else{
      setUserInfo({alertMsg : 'username or email are invalid'});
    }
    
  }

  

  return (
    <div id='user-div'>
        <form id='user-form'>

            <h2 id="form-title">Tell us who you are :)</h2>

            <ul id="form-inputs">
              <li className="form-input">
                <input type="text" className="user-input" placeholder='Enter a username' maxLength={16} onChange={(e) => getInputToState(e, "username")}/>          
              </li>
              <li className="form-input">
                <input type="text" className="user-input" placeholder='Enter your e-mail' onChange={(e) => getInputToState(e, "email")}/>
              </li>
              <li className="form-input">
                <input type="text" className="user-input" placeholder='Create a password' onChange={(e) => getInputToState(e, "password")}/>
              </li>
              <li className="form-input">
                <a><button className='action-form' id='submit-button' onClick={onSubmit}>Submit</button></a>
              </li>
            </ul>

            <h4 id='alert-msg' >{userInfo.alertMsg}</h4>


            

            <h3 id='login-sign'>Already have an account ? <a href="/" id='login-form'>Log In</a></h3>
            
        </form>
    </div>
  )
}

export default UserInterface ;
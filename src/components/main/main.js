import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/userActions';
import './main.css';


function Main(props){

    const [ userState, setUserState ] = useState({});
    localStorage.setItem('userLoggedIn',false);

    useEffect(() => {
        
        // Create a local storage object to store and manipulate use data
        if(localStorage.userLoggedIn == false){
            localStorage.setItem('name','');
            localStorage.setItem('email','');
            localStorage.setItem('password','');
        }else{
            console.log(localStorage.name,localStorage.email,localStorage.password)
        }
        props.checkUser();
        setUserState(props.user);
    }, [])
    


    return ( 
        <div>
            <h1 id='Title'>Your favorite<br></br>Gifts shop</h1>
            {userState.user?.isLoggedIn ? <h2 id='welcome-user'>Welcome {userState.user.userName}</h2> : 
            <a id="profile-area" href='/user-form'>
                <img src="user.png" alt="profile" id="profile-img" />
            </a>
            }
            <nav id='navbar'>
                <div id='menu-btn'>
                    <div id='menu-btn-burger'></div>
                </div>
                <ul>
                    <li className='menu' id='menu1'><a className='anchor-menu' {...(userState?.user?.isLoggedIn ? {href : '/profile'} : {href : '/user-form'})} >Profile</a></li>
                    <li className='menu' id='menu2'><a className='anchor-menu'>Cart</a></li>
                    <li className='menu' id='menu3'><a className='anchor-menu'>History</a></li>
                </ul>
                <form>
                    <input />
                    <button id='search'>search</button>
                </form>
            </nav>
        </div>
    );

    
}


const mapUserStateToProps = (state) => {
    return{
        user : state?.myUser
    }
}



export default connect(mapUserStateToProps, {checkUser})(Main);

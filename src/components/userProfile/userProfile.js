import React, { Component } from 'react'
import { checkUser, getUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import'./userProfile.css'

class UserProfile extends Component {

  componentDidMount(){
    checkUser();
  }

  

  
  
  render() {

    function logout(){
      this.props.getUser(logoutUser);
    }
    
    const { checkUser, getUser } = this.props;
    const { user } = this.props.user;
    const logoutUser = {
      isLoggedIn : false,
      userName : '',
      email : '',
      password : ''
    };


    return (
      <div id='user-profile'>
        {user?.isLoggedIn == true ? 
        <div id='prfl'>
          <img alt='user' src='user.png' id='profile-picture'></img>
          <div id='user-info'>
            <h1>username : <span>{user.userName}</span></h1>
            <h1>e-mail : <span>{user.email}</span></h1>
            <h1>password : ******</h1>
          </div>
          <Link to="/" className="logout" onClick={logout}>Log out</Link>
        </div>
        : <div id='no-logged'>
            <h1 id='not-logged-title'>You are not logged in !</h1>
            <Link id="signin-nav" to='/user-form'>Sign in here</Link>
          </div>}
      </div>
    )
  }
}

const mapUserStateToProps = (state) => ({
  user : state?.myUser || [],
})


export default connect(mapUserStateToProps, {checkUser, getUser})(UserProfile);
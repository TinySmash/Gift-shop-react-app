import React, { Component } from 'react'
import './profile.css';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/userActions';
import { Link } from 'react-router-dom';

class Profile extends Component {

    state = {
        user : {
            isLoggedIn : false,
            userName : '',
            email : '',
            password : ''
        }
    }


    componentDidMount(){
        checkUser()
        const currentUser = this.props.user.user;
        this.setState({
            user : currentUser
        })
    }
    
    
    render() {

        const {user} = this.state;
        const {checkUser} = this.props;
        

    return (
      <div>
        {user?.isLoggedIn ? <h2 id='welcome-user'>Welcome {user.userName}</h2> : 
            <Link id="profile-area" to='/user-form'>
                <img src="user.png" alt="profile" id="profile-img" />
            </Link>
        }
      </div>
    )
  }
}

const mapUserStateToProps = (state) => {
    return{
        user : state?.myUser
    }
}

export default connect(mapUserStateToProps, {checkUser})(Profile);
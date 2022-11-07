import React, { Component } from 'react'
import './profile.css';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/userActions';

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
        this.props.checkUser()
        const currentUser = this.props.user.user;
        console.log(currentUser);
        this.setState({
            user : currentUser
        })
    }
    
    
    render() {

        const {user} = this.state;
        //const {checkUser} = this.props;
        

    return (
      <div>
        {user?.isLoggedIn ? <h2 id='welcome-user'>Welcome {user.userName}</h2> : 
            <a id="profile-area" href='/user-form'>
                <img src="user.png" alt="profile" id="profile-img" />
            </a>
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
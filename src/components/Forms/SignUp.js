import React, { Component } from 'react'
import {connect} from 'react-redux'
import {userSignUp} from '../../actions/actions'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        confirm_password:"",
        address:"",
        loading: false,
        errors: {},
        pagestate: ""
      };
      onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log("Email and password : ", this.state.email);
      };
      onSubmit = event => {
        event.preventDefault();
        this.props.userSignUp(this.state);
        // store.dispatch(
        //   userLoggedIn("logged_in", this.state.email, this.state.password)
        // );
      };
      render() {
        const { loading, errors } = this.state;
        console.log("Store Data returned by SignUp component :  ", this.props);
        return (
          <form onSubmit={this.onSubmit}>
            <div class="login-box">
              <h1>Sign Up</h1>
                 <div class="textbox">
                     <i class="fas fa-user"></i>
                    <input type="text" placeholder="Email Id" name="email" onChange={this.onChange}/>
                  </div>
                  <div class="textbox">
                   <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                    </div>  
                    <div class="textbox">
                   <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Confirm Password" name="confirm_password" onChange={this.onChange}/>
                    </div> 
                    <div class="textbox">
                  <input type="text" placeholder="Address" name="address" onChange={this.onChange}/>
                    </div>
                     <button class="btn" value="Sign Up">Sign Up</button>
                </div>
            </form>
        );
      }   
}
function mapDispatchToProps(dispatch){
return{
   userSignUp:(data)=>dispatch(userSignUp(data)) 
}
}
export default connect(null,mapDispatchToProps)(SignUp);

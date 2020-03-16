import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { userLoggedIn } from "../../actions/actions";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import store from "../../store/store";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import ProductsList from "../ProductsList";
import { throws } from "assert";

import{
  Switch,Route,Redirect
} from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {},
    pagestate: "",
    redirectPage : false
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.userLoggedIn(this.state); 
    if(store.getState().signup.email===this.state.email && store.getState().signup.password === this.state.password )
    {
      this.setState({redirectPage:true});
    }
    
    console.log("Email and password : ", this.state.email,this.state.password);
    console.log("Data returned by store in signin component : " + store.getState().login.email+","+store.getState().login.password);
  };
  render() {
    const { loading, errors } = this.state;
    console.log("Store Data returned by SignUp component :  ", this.props);
    console.log("Data returned by the store : "+store);
    if(this.state.redirectPage){
      return(
        <Redirect to='/'></Redirect>
      )
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div class="login-box">
          <h1>Login</h1>
             <div class="textbox">
                 <i class="fas fa-user"></i>
                <input type="text" placeholder="Email Id" name="email" onChange={this.onChange}/>
              </div>
              <div class="textbox">
               <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                </div>  
                 <button class="btn" value="Sign in">Sign In</button>
            </div>
        </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLoggedIn: (data)=>dispatch(userLoggedIn(data))
  };
  // console.log("Data returned by mapStateToProps : " + state.login.type);
};
export default connect(null,mapDispatchToProps)(SignUp);

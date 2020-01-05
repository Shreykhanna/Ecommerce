import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import {userLoggedIn} from '../../actions/actions'
import {connect} from 'react-redux'
import NavBar  from '../NavBar';
import store from '../../store/store'
import {Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import ProductsList from '../ProductsList';

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {},
    pagestate:""
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("Email and password : ", this.state.email)
  }
  onSubmit = (event) => {
    event.preventDefault();
    store.dispatch(userLoggedIn('logged_in',this.state.email,this.state.password));   
  }
  render() {
    const { loading, errors } = this.state;
    console.log("Store Data returned by SignUp component :  ",this.props);
    return (
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Field error={!!errors.email} className="input-field">
            <label htmlFor="email" className="label-email">Email</label>
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              name="email"
              onChange={this.onChange} />
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              id="password"
              name="password"
              onChange={this.onChange} />
          </Form.Field>
            <Button primary> SignUp </Button>
        </Form>
    )
  }
}
const mapStateToProps = state=>{
  return{
    logindata:state.login.type
  }
// console.log("Data returned by mapStateToProps : " + state.login.type);

}
export default connect(mapStateToProps)(SignUp);

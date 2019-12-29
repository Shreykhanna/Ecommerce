import React from "react"
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from '../components/Button'
import store from '../store/store'
import {connect} from 'react-redux';
class NavBar extends React.Component{

  render(){
  var button;
  var temp=false;
  const state=store.getState();
  console.log("State in navbar component: " +state);
  if(state.login.type ==='USER_LOGGED_IN'){
    button=<ButtonContainer>
    <span className="mr-1"></span>
     LogOut
    </ButtonContainer>
  }else{
    button=<ButtonContainer>
    <span className="mr-1"></span>
     Login
    </ButtonContainer>
  }
  return(
  <NavWrapper className= "navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 ">
    <Link to="/">
      <img src={logo} alt="store" className="navbar-brand"/>
   </Link>
    <ul className="navbar-nav align-items-center">
     <li className="nav-item ml-5">
   <Link to="/" className="nav-link">Products</Link>
   </li>
   </ul>
   <div className="ml-auto">
   <Link to="/signup" className="ml-auto">
    {button}
   </Link>
   <Link to="/cart" className="ml-auto">
   <ButtonContainer>
   <span className="mr-2">
    <i className="fas fa-cart-plus"/>
    </span>My Cart</ButtonContainer >
   </Link>
  </div>
  </NavWrapper>
  )
}
}
function mapStateToProps(state){
console.log("Data returned by mapStateToProps on Navbar: " + state.login.type);
}
export default connect(mapStateToProps)(NavBar);

const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
  color:var(--mainWhite)!important;
  font-size:2.3rem;
  text-transform:capitalize;
}`

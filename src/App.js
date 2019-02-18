import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import NavBar from './components/NavBar'
import Product from './components/Products'
import ProductList from './components/ProductsList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'
import SignUp from './components/Forms/SignUp'

import{
  Switch,Route
} from 'react-router-dom'

const App= () =>(
      <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/"            component={ProductList}/>
      <Route exact path="/details"     component= {Details}/>
      <Route exact path="/cart"        component={Cart}/>
      <Route exact path="/signup"      component={SignUp}/>
      <Route component={Default}/>
      </Switch>
      <Modal/>
    </div>
);

export default App;

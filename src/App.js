import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Product from './components/Products'
import ProductList from './components/ProductsList'
import Cart from './components/Cart'
import Details from './components/Details'
import Default from './components/Default'
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
      <Route component={Default}/>
      </Switch>
    </div>
);

export default App;

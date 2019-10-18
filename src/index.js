import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './components/context';
import {BrowserRouter,Route} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <ProductProvider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);

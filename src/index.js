import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './components/context';
import {BrowserRouter,Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById('root')
);

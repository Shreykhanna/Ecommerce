import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './components/context';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
  <ProductProvider >
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </ProductProvider>
  </Provider>,
  document.getElementById('root')
);

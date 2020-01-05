import {combineReducers} from 'redux';
import login from './login-reducer';
import logout from './logout-reducer'

export default combineReducers({
  login:login,
  logout:logout
})
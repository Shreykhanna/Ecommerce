import {combineReducers} from 'redux';
import login from './login-reducer';
import logout from './logout-reducer'
import signup from './signup-reducer'

export default combineReducers({
  signup:signup,
  login:login,
  logout:logout
})
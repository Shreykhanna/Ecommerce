import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from '../reducers/root-reducer';

function saveToLocalStorage(state)
{
  try{
    const serializedState=JSON.stringify(state)
    localStorage.setItem('state',serializedState)

  }catch(e){
    console.log("Error : ",e);
  }
}
function loadFromLocalStorage()
{
  try{
    const serializedState=localStorage.getItem('state');
    if(serializedState===null) return undefined
    return JSON.parse(serializedState)

  }catch(e){
    console.log(e);
  }
}
const persistedState=loadFromLocalStorage();
const initialState = {};
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store;

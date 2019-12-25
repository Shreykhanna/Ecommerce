export const userLoggedIn=(action,username,password)=>(
  console.log(action+" , "+username+" , "+password),
{

    type:'USER_LOGGED_IN',
    username,
    password,
    action
    
})
export const userLoggedOut=action=>(
  {
  
   type:'USER_LOGGED_OUT',
   action
   
})
export const fetchDetails=()=>dispatch=>{
  dispatch()
}
 export const Filters =
{
  USER_LOGGED_IN : 'USER_LOGGED_IN',
  USER_LOGGED_OUT : 'USER_LOGGED_OUT'
  
}

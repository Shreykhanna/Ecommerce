export const Filters =
{
  USER_LOGGED_IN : 'USER_LOGGED_IN',
  USER_LOGGED_OUT : 'USER_LOGGED_OUT'
  
}

export const userLoggedIn=(loginData)=>{
return(dispatch,getState)=>{
  dispatch(
    {
      type:'USER_LOGGED_IN', 
      loggedIn:true,
      email:loginData.email,
      password:loginData.password
    })  
}
}
// export const userLoggedOut=action=>(
//   {
//    type:'USER_LOGGED_OUT',
//    action  
// })



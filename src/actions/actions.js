export const Filters =
{
  USER_LOGGED_IN : 'USER_LOGGED_IN',
  USER_LOGGED_OUT : 'USER_LOGGED_OUT'
  
}

export const userLoggedIn=(action,username,password)=>(
  console.log(action+" , "+username+" , "+password),
{

    type:'USER_LOGGED_IN',
    username,
    password,
   
    
})
export const userLoggedOut=action=>(
  {
   type:'USER_LOGGED_OUT',
   action  
})



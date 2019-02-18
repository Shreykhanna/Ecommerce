const USER_LOGGED_IN="USER_LOGGED_IN"
const USER_LOGGED_OUT="USER_LOGGED_OUT"
let nextid=0
export function userLoggedIn(user)
{
  return{
    type:USER_LOGGED_IN,
    user
  }
}
export function userLoggedOut()
{
  return{
   type:USER_LOGGED_OUT,
  }
}

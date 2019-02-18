const USER_LOGGED_IN="USER_LOGGED_IN"
const USER_LOGGED_OUT="USER_LOGGED_OUT"

export default function User(state={},action={})
{
  switch(action.type)
    {
        case USER_LOGGED_IN:
          console.log("USER STATE",action.user);
          return action.user;
        case USER_LOGGED_OUT:
          return {};
        default:
          return state;
    }
}

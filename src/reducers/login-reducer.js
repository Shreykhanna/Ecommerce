
const login=(state=[],action)=>{
    switch(action.type){
        case 'USER_LOGGED_IN':
            return(
                {
                    type : action.type,
                    email:action.email,
                    password:action.password
                }
            )
        default:
            return state
    }
}
export default login;
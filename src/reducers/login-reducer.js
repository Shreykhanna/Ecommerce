const login=(state=[],action)=>{
    switch(action.type){
        case 'USER_LOGGED_IN':
            return(
                {
                    type : action.type,
                    username : action.username,
                    password : action.password
                }
            )
        default:
            return state
    }
}
export default login;
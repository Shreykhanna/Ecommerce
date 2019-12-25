const logout=(state=[],action)=>{
    switch(action.type){
        case 'USER_LOGGED_OUT':
            return[
                ...state,
                {
                    action : action.text
                }
            ]
        default:
            return state
    }
}
export default logout;
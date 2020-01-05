const signUp=(state=[],action)=>{
    switch(action.type){
        case 'USER_SIGN_UP':
            return(
                {
                    type : action.type,
                    email:action.email,
                    password:action.password,
                    confirmpassword:action.confirmpassword
                }
            )
        default:
            return state
    }
}
export default signUp;
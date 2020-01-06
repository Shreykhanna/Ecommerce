export const Filters = {
  USER_LOGGED_IN: "USER_LOGGED_IN",
  USER_LOGGED_OUT: "USER_LOGGED_OUT"
};

export const userLoggedIn = loginData => {
  return (dispatch, getState) => {
    dispatch({
      type: "USER_LOGGED_IN",
      isloggedIn: true,
      email: loginData.email,
      password: loginData.password
    });
  };
};
export const userSignUp = signUpData => {
  return (dispatch, getState) => {
    dispatch({
      type: "USER_SIGN_UP",
      isloggedIn: true,
      email: signUpData.email,
      password: signUpData.password,
      confirmpassword:signUpData.confirmpassword
    });
  };
};
// export const userLoggedOut=action=>(
//   {
//    type:'USER_LOGGED_OUT',
//    action
// })

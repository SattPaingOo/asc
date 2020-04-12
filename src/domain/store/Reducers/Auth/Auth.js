const AuthReducer = (state=false, action) =>{
    switch(action.type){
        case "IsLogIn":
          return state = action.payload;
        default: 
          return state;
    } 
}

export default AuthReducer;
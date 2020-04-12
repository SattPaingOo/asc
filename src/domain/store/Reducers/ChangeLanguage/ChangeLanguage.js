const ChangeLanguageReducer = (state="en", action) =>{
    switch(action.type){
        case "ChangeLanguage": 
          return state =!state;

        default: 
          return state;
    } 
}

export default ChangeLanguageReducer;
  
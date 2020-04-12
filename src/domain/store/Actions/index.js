export const changeLanguage = () =>{
    return(
        {
            type: 'ChangeLanguage'
        }
    )
}

export const loginaction = (islog) =>{
    return(
        {
            type: 'IsLogIn',
            payload : islog
        }
    )
}
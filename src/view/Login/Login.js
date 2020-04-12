import React, { useEffect } from 'react';
import './login.scss';
import logo from  '../../assets/iconpackage/black-logo.png';
import { FormGroup , InputGroup , Button , Tooltip , Intent , Callout} from '@blueprintjs/core';
import { useTranslation } from 'react-i18next';
import { apiService } from '../../domain/requester/requester';
import { useSelector , useDispatch } from 'react-redux';
import { loginaction } from '../../domain/store/Actions/index';

function Login(props) {

    const isLogged = useSelector(state => state.auth)
    const dispatch = useDispatch();
    
    const { t } = useTranslation();

    const acctype = React.createRef();
    const [showPassword,setpassword] = React.useState(false);
    const [accType,setaccType] = React.useState('0');
    const [loginbtnloading,setloginbtnloading] = React.useState(false);
    const [signinerror,setsigninerror] = React.useState(true);
    const [accountTypeErr,setAccountTypeError] = React.useState(true);

    //SignIn Email
    const signinemail = React.createRef();
    const signinpassword = React.createRef();

    useEffect( ()=>{
        if(localStorage.getItem('ascuser')){
            props.history.push('/');
        }
    })

    function handleLockClick(){
        setpassword(!showPassword);
    }

    function accTypeAction(){
        setaccType(acctype.current.value)
    }

    function signinaction(){
        setloginbtnloading(true);
        let req={
            email : signinemail.current.value,
            password : signinpassword.current.value,
        }
        apiService.post('api/v1/winmal',req,loginSuccess,LoginFail);
    }

    function loginSuccess(res){
        if( res.data.message === 'success' ){
            localStorage.setItem('ascuser', JSON.stringify(res.data.user));
            dispatch(loginaction(true));
            props.history.push('/');
        }else{
            setloginbtnloading(false);
            setsigninerror(false);
            setTimeout(function(){
                setsigninerror(true);    
            },2000);
        }
    }

    function LoginFail(err){
        console.log("Error",err);
    }

    function registeraction(){
        if(accType!== '0'){
            props.history.push({
                pathname : '/register',
                state: {
                    type : accType
                }
            });
        }else{
            setAccountTypeError(false);
            setTimeout(function(){
                setAccountTypeError(true);    
            },2000);
        }
    }

    const lockButton = (
        <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`} >
            <Button
                icon={showPassword ? "eye-open" : "eye-off"}
                intent={Intent.PRIMARY}
                minimal={true}
                onClick={handleLockClick}
            />
        </Tooltip>
    );

    return(
        <div id="login">
            <div className="header">
                <div className="title">A Seaman Club</div>
            </div>
            <div className="content">
                <div className="left">
                    <img src={logo} alt="seamanLogo" className="asclogo"/>
                </div>
                <div className="right">
                    <div className="formdiv">
                        <Callout intent={Intent.DANGER} hidden={signinerror} className="callout">
                            Username and Password are not Correct
                        </Callout>
                        <FormGroup>
                            <InputGroup inputRef={signinemail} placeholder="E-Mail" />
                        </FormGroup>
                        <FormGroup>
                            <InputGroup
                                placeholder="Password"
                                rightElement={lockButton}
                                inputRef={signinpassword}
                                type={showPassword ? "text" : "password"}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button text="Login" className="loginbtn" intent="primary" loading={loginbtnloading} onClick={signinaction}/>
                        </FormGroup>
                        <div className="forgotdiv">
                            <div className="text">Forgotten Password?</div>
                        </div>
                        <div className="ordiv">
                            <div className="text">OR</div>
                        </div>
                        <div className="regtitlediv">
                            <div className="text">Welcome To A Seamen Club</div>
                        </div>
                        <Callout intent={Intent.DANGER} hidden={accountTypeErr} className="callout">
                            You Need to Select Account Type
                        </Callout>
                        <FormGroup>
                            <div className="acctypediv bp3-select .modifier">
                                <select className="acctype" ref={acctype} onChange={accTypeAction}>
                                    <option defaultValue value="0">Select Account Type</option>
                                    <option value="seafarer">Seafarer</option>
                                    <option value="business">Business</option>
                                </select>
                                </div>
                        </FormGroup>
                        <div className="signuptext">
                            <ul className="list">
                                <li className="text">All account type are free</li>
                                {
                                    accType === 'seafarer' 
                                    ? (
                                        <div>
                                            <li className="text">Post your detail CV and easy to apply</li>
                                            <li className="text">Browse latest marine jobs and classes.</li>
                                            <li className="text">Chat with the shipmates and share knowledge.</li>
                                            <li className="text">Get detail information of jobs and maritime training classes.</li>
                                            <li className="text">See the latest & current maritime news.</li>
                                        </div>
                                    )
                                    : null
                                }
                                {
                                    accType === 'business' 
                                    ? (
                                        <div>
                                            <li className="text">Browse the all seafarers database.</li>
                                            <li className="text">Easy to find the best candidates.</li>
                                            <li className="text">Easy to view your jobs/classes posts.</li>
                                            <li className="text">Get detail insights about seafarers careers.</li>
                                            <li className="text">See the latest & current maritime news.</li>
                                        </div>
                                    )
                                    : null
                                }
                            </ul>
                        </div>
                        <FormGroup>
                            <Button 
                                text="Sign Up"
                                className="loginbtn" 
                                intent="primary"
                                onClick={registeraction}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
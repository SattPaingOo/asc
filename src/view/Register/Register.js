import React from 'react';
import logo from  '../../assets/iconpackage/black-logo.png';
import { FormGroup , InputGroup , Button , Tooltip , Intent , Checkbox, ControlGroup , Callout } from '@blueprintjs/core';
import { apiService } from '../../domain/requester/requester';
import './register.scss';
import DatePicker from 'react-widgets/lib/DatePicker';
import moment from 'moment';
import {Link} from 'react-router-dom';

function Register(props){
    return(
        <div id="register">
            <div className="header">
                <div className="title">A Seaman Club</div>
            </div>
            <div className="content">
                <div className="left">
                    <div className='leftpanel'>
                        <div className="imgdiv">
                            <img src={logo} alt="seamanLogo" className="asclogo"/>
                        </div>
                        <div className="intropara">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil temporibus facilis earum commodi laborum, in porro iste officia ab ut minima et laboriosam unde? Modi a odio dicta aperiam! 
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="panel">
                        {props.location.state.type === 'seafarer'
                            ? <SeafarerRegister props={props}/> 
                            : <BusinessRegister props={props}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

class SeafarerRegister extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            ranksData : [],
            countriesData : [],
            DOB : new Date(),
            ischecked : false,
            isshowerror : false,
            isbtnloading : false,
            isregistersuccess : false,
            errorMessage : '',
        };
        this.nameRef = React.createRef();
        this.rankTypeRef = React.createRef();
        this.seaBookNoRef = React.createRef();
        this.countryTypeRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confrimpasswordRef = React.createRef();
    }
    
    componentDidMount(){
        apiService.get('api/ranks',null,this.getRanksSuccess,this.getRanksError);
        apiService.get('api/countries',null,this.getCountriesSuccess,this.getCountriesError);
    }

    getRanksSuccess = (res) => {
        console.log("Get Ranks Successfully");
        this.setState({
            ranksData : res.data.data
        })
    }

    getRanksError = (err) => {
        console.log(err);
    }

    getCountriesSuccess = (res) => {
        console.log("Get countries Successfully");
        this.setState({
            countriesData : res.data.data
        })
    }

    getCountriesError = (err) => {
        console.log(err)
    }

    handleLockClick(){
        this.setState({
            showPassword : !this.state.showPassword
        })
    }

    checkaction = () => {
        this.setState({
            ischecked : !this.state.ischecked
        })
    }

    regaction = () => {
        this.setState({
            isbtnloading : true
        })
        let req= {
            name : this.nameRef.current.value,
            rank : this.rankTypeRef.current.value,
            dob : moment(this.state.DOB).format("DD/MM/YYYY"),
            seamen_book_no : this.seaBookNoRef.current.value,
            country_id : this.countryTypeRef.current.value,
            email : this.emailRef.current.value,
            password : this.passwordRef.current.value,
            confirm_password : this.confrimpasswordRef.current.value
        }
        if(!req.name || req.rank === 'Select Rank' || !req.dob || !req.seamen_book_no || !req.country_id || !req.email || !req.password || !req.confirm_password){
            this.setState({
                isshowerror : true,
                isbtnloading : false,
                errorMessage : 'Please Fill all fields',
            })
            setTimeout(()=>{
                this.setState({
                    isshowerror : false,
                    errorMessage : '',
                })
            },2000);
        }else{
            apiService.post('api/v1/seafarer/register',req,this.registerSuccess,this.registerFail);
        }
    }

    registerSuccess = (res) => {
        console.log("Register Successfully");
        if(res.data.message === "success"){
            this.setState({
                isbtnloading : false
            });
            this.setState({
                isregistersuccess : true
            })
            setTimeout(
                () => {
                    this.props.props.history.push({
                        pathname : '/login',
                    });
                },1000
            )
        }else{
            if(res.data.message){
                this.setState({
                    isshowerror : true,
                    errorMessage : res.data.message,
                    isbtnloading : false
                })
            }else{
                this.setState({
                    isshowerror : true,
                    errorMessage : "Error",
                    isbtnloading : false
                })
            }
            setTimeout(()=>{
                this.setState({
                    isshowerror : false,
                    errorMessage : ''
                })
            },2000);
        }
    }

    registerFail(err){
        console.log(err)
    }

    render(){
        const lockButton = (
            <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`} >
                <Button
                    icon={this.state.showPassword ? "eye-open" : "eye-off"}
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={()=>this.handleLockClick()}
                />
            </Tooltip>
        );
        const { showPassword , ranksData , countriesData , DOB , ischecked } = this.state;
        return(
            <div id="seafarer">
                <div className="formdiv">
                    <div className="title">
                        Register For Seafarer Account
                    </div>
                    <ControlGroup vertical={true}>
                        <Callout intent={Intent.DANGER} hidden={!this.state.isshowerror} className="callout">
                            {this.state.errorMessage}
                        </Callout>
                        <Callout intent={Intent.SUCCESS} hidden={!this.state.isregistersuccess} className="callout">
                            Register Successfully !
                        </Callout>
                        <FormGroup>
                            <InputGroup placeholder='Name' required inputRef={this.nameRef}/>
                        </FormGroup>
                        <FormGroup>
                            <div className="rankdiv bp3-select .modifier">
                                <select ref={this.rankTypeRef}>
                                    <option defaultValue>Select Rank</option>
                                    {ranksData.map( (rank,index) => (
                                        <option value={rank.name} key={index}>{rank.name}</option>
                                    ))}
                                </select>
                            </div>
                        </FormGroup>
                        <FormGroup
                            label="Date Of Birth"
                        >
                            <DatePicker value={DOB} onChange={value => this.setState({ DOB : value })}/>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup inputRef={this.seaBookNoRef} placeholder="Seaman's Book No* " required/>
                        </FormGroup>
                        <FormGroup>
                            <div className="countryselectdiv bp3-select .modifier">
                                <select ref={this.countryTypeRef}>
                                    {countriesData.map( (country,index) => (
                                        country.country_code === 'MM'  
                                        ? <option defaultValue selected value={country.id} key={index}>{country.country_name}</option>
                                        : <option value={country.id} key={index}>{country.country_name}</option>
                                    ))}
                                </select>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup inputRef={this.emailRef} placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup
                                placeholder="Password"
                                rightElement={lockButton}
                                type={showPassword ? "text" : "password"}
                                required
                                inputRef={this.passwordRef}
                            />
                        </FormGroup>
                        <FormGroup>
                            <InputGroup
                                placeholder="ConfirmPassword"
                                rightElement={lockButton}
                                type={showPassword ? "text" : "password"}
                                required
                                inputRef={this.confrimpasswordRef}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Checkbox label="I accept Terms and Coditions" large onChange={this.checkaction}></Checkbox>
                        </FormGroup>
                        <FormGroup>
                            <div className="btndiv">
                                <Button 
                                    className="btn"
                                    text="Register"
                                    intent="primary"
                                    disabled={!ischecked}
                                    loading={this.state.isbtnloading}
                                    onClick={this.regaction}
                                />
                            </div>
                        </FormGroup>
                        <div className="loginlinkbox">
                            <Link to="/login" className="link">Already have a account? Sign in</Link>
                        </div>
                    </ControlGroup>    
                </div>
            </div>
        )
    }
}

class BusinessRegister extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            countriesData : [],
            ischecked : false,
            isbtnloading : false,
            isshowerror : false,
            isregistersuccess : false,
            errorMessage : '',
            enterBusinesstype : false,
        };
        this.companyNameRef = React.createRef();
        this.businessTypeRef = React.createRef();
        this.enterBusinessTypeRef = React.createRef();
        this.contactPersonNameRef = React.createRef();
        this.positionRef = React.createRef();
        this.contactNumberRef = React.createRef();
        this.officeAddressRef = React.createRef();
        this.streetRef = React.createRef();
        this.cityRef = React.createRef();
        this.companyNameRef = React.createRef();
        this.stateRef = React.createRef();
        this.countriesTypeRef = React.createRef();
        this.officialWebsiteRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
    }
    
    componentDidMount(){
        apiService.get('api/countries',null,this.getCountriesSuccess,this.getCountriesError);
    }

    getCountriesSuccess = (res) => {
        console.log("Get countries Successfully");
        this.setState({
            countriesData : res.data.data
        })
    }

    getCountriesError = (err) => {
        console.log(err)
    }

    handleLockClick(){
        this.setState({
            showPassword : !this.state.showPassword
        })
    }

    checkaction = () => {
        this.setState({
            ischecked : !this.state.ischecked
        })
    }

    regaction = () => {
        this.setState({
            isbtnloading : true
        })

        let business_type;
        let sendrequest = true;

        if(this.state.enterBusinesstype){
            business_type = this.enterBusinessTypeRef.current.value 
        }else{
            business_type = this.businessTypeRef.current.value
        }

        let req= {
            name : this.companyNameRef.current.value,
            business_type : business_type,
            contact_person_name : this.contactPersonNameRef.current.value,
            position : this.positionRef.current.value,
            phone : this.contactNumberRef.current.value,
            address : this.officeAddressRef.current.value,
            street : this.streetRef.current.value,
            city : this.cityRef.current.value ,
            state : this.stateRef.current.value,
            country_id : this.countriesTypeRef.current.value,
            website_url : this.officialWebsiteRef.current.value,
            email : this.emailRef.current.value,
            password : this.passwordRef.current.value,
            confirm_password : this.confirmPasswordRef.current.value,
        }

        for(var key in req) {
            if(req.hasOwnProperty(key)) {
                var value = req[key];
                if(key==='website_url'){
            
                }else{
                    if(!value){
                        sendrequest = false;
                    }
                }
            }
        }

        if(sendrequest){
            apiService.post('api/v1/business/register',req,this.registerSuccess,this.registerFail);
        }else{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            this.setState({
                isshowerror : true,
                isbtnloading : false,
                errorMessage : 'Please Fill all fields',
            })
            setTimeout(()=>{
                this.setState({
                    isshowerror : false,
                    errorMessage : '',
                })
            },2000);
        }
        
    }

    registerSuccess = (res) => {
        console.log("Register Successfully");
        console.log(res.data)
        if(res.data.message === "success"){
            this.setState({
                isbtnloading : false
            });
            this.setState({
                isregistersuccess : true
            })
            setTimeout(
                () => {
                    this.props.props.history.push({
                        pathname : '/login',
                    });
                },1000
            )
        }else{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            if(res.data.message){
                this.setState({
                    isshowerror : true,
                    errorMessage : res.data.message,
                    isbtnloading : false
                })
            }else{
                this.setState({
                    isshowerror : true,
                    errorMessage : "Error",
                    isbtnloading : false
                })
            }
            setTimeout(()=>{
                this.setState({
                    isshowerror : false,
                    errorMessage : ''
                })
            },2000);
        }
    }

    registerFail(err){
        console.log(err)
    }

    businessTypeAction(){
        if(this.businessTypeRef.current.value === "Customize"){
            this.setState({
                enterBusinesstype : true
            })
        }else{
            this.setState({
                enterBusinesstype : false
            })
        }
    }

    render(){
        const lockButton = (
            <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`} >
                <Button
                    icon={this.state.showPassword ? "eye-open" : "eye-off"}
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={()=>this.handleLockClick()}
                />
            </Tooltip>
        );
        const { showPassword , countriesData } = this.state;
        return(
            <div id="seafarer">
                <div className="formdiv">
                    <div className="title">
                        Register For Business Account
                    </div>
                    <Callout intent={Intent.DANGER} hidden={!this.state.isshowerror} className="callout">
                        {this.state.errorMessage}
                    </Callout>
                    <Callout intent={Intent.SUCCESS} hidden={!this.state.isregistersuccess} className="callout">
                        Register Successfully !
                    </Callout>
                    <FormGroup>
                        <InputGroup placeholder='Official Company Name' required inputRef={this.companyNameRef}/>
                    </FormGroup>
                    <FormGroup>
                        <div className="rankdiv bp3-select .modifier">
                            <select className="acctype" ref={this.businessTypeRef} onChange={()=>this.businessTypeAction()}>
                                <option defaultValue value="">Business Type</option>
                                <option value="Shipping Company">Shipping Company</option>
                                <option value="SRPS/Crewing Company">SRPS/Crewing Company</option>
                                <option value="Maritime University">Maritime University</option>
                                <option value="Maritime Training School">Maritime Training School</option>
                                <option value="Maritime Training Center">Maritime Training Center</option>
                                <option value="Maritime Organization">Maritime Organization</option>
                                <option value="Maritime Institute">Maritime Institute</option>
                                <option value="Customize">Customize</option>
                            </select>
                        </div>
                    </FormGroup>
                    {this.state.enterBusinesstype ?
                        <FormGroup>
                            <InputGroup placeholder='Enter Your Business Type' required inputRef={this.enterBusinessTypeRef}/>
                        </FormGroup>
                        : null
                    }
                    <FormGroup>
                        <InputGroup placeholder='Contact Person Name' required inputRef={this.contactPersonNameRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='Position ( eg : Director )' required inputRef={this.positionRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='Contact Number' required inputRef={this.contactNumberRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='Office Address No' required inputRef={this.officeAddressRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='Street' required inputRef={this.streetRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='City' required inputRef={this.cityRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='State' required inputRef={this.stateRef}/>
                    </FormGroup>
                    <FormGroup>
                        <div className="countryselectdiv bp3-select .modifier">
                            <select ref={this.countriesTypeRef}>
                                {countriesData.map( (country,index) => (
                                    country.country_code === 'MM'  
                                    ? <option defaultValue selected value={country.id} key={index}>{country.country_name}</option>
                                    : <option value={country.id} key={index}>{country.country_name}</option>
                                ))}
                            </select>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder='Office Website' required inputRef={this.officialWebsiteRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup placeholder="Email" required inputRef={this.emailRef}/>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup
                            placeholder="Password"
                            rightElement={lockButton}
                            type={showPassword ? "text" : "password"}
                            required
                            inputRef={this.passwordRef}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputGroup
                            placeholder="ConfirmPassword"
                            rightElement={lockButton}
                            type={showPassword ? "text" : "password"}
                            required
                            inputRef={this.confirmPasswordRef}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Checkbox label="I accept Terms and Coditions" large onChange={this.checkaction}></Checkbox>
                    </FormGroup>
                    <FormGroup>
                        <div className="btndiv">
                            <Button 
                                text="Register" 
                                loading={this.state.isbtnloading} 
                                className="btn" 
                                intent="primary" 
                                disabled={!this.state.ischecked} 
                                onClick={this.regaction}
                            />
                        </div>
                    </FormGroup>
                    <div className="loginlinkbox">
                        <Link to="/login" className="link">Already have a account? Sign in</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
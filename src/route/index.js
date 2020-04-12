import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {PrivateRoute} from '../components/PrivateRoute/PrivateRouter';
import Home from '../view/Home/Home';
import JobPost from '../view/JobPost/JobPost';
import JobPostDetails from '../view/JobPostDetails/JobPostDetails';
import Login from '../view/Login/Login';
import Register from '../view/Register/Register';

const routes = [
    {
        path: '/job_post',
        component: JobPost
    },
    {
        path: '/viewJobPostDetails',
        component: JobPostDetails
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
];
 
function CustomRoute(){
    return(
        <div>
            <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    {
                        routes.map((route,index)=>(
                            <Route key={index} path={route.path} component={route.component}/>
                      ))
                    }
            </Switch>
        </div>
    )
}

export default CustomRoute;
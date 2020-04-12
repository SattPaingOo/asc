import React , {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './view/Header/Header';
import CustomRoute from './route/index';
import { useSelector , useDispatch } from 'react-redux';
import { loginaction } from '../src/domain/store/Actions/index';

function App() {

  const isLogged = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect( () =>{
      if(localStorage.getItem('ascuser')){
        dispatch(loginaction(true))
      }else{
        dispatch(loginaction(false))
      }
    }
  )

  return (
    <div>
       <Router>
          {isLogged
              ? <Header/>
              : null
          }
         <CustomRoute/>
       </Router>
    </div>
  );
}

export default App;
 

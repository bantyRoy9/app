import { Box } from '@mui/material';
import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/user/Login';
import Signup from './components/user/signup';
import Forget from './components/user/forget';
import Homes from './components/home/homes';
import UserDetail from './components/testBlock/userDetail';
import Submit from './components/submit';

function App () {
  return(
    
    <BrowserRouter>
     {/* <Header exact path='/' element={<Header/>}/> */}
     <Routes>
       <Route exact path='/' element={<Homes/>}/>
       <Route exact path='/user' element={<UserDetail/>}/>
       <Route exact path='/user/:id' element={<Home/>}/>
       <Route exact path='/login' element={<Login />}/>
       <Route exact path='/submit' element={<Submit/>}/>
       <Route exact path='/sign'   element={<Signup/>}/>
       <Route exact path='/forget' element={<Forget/>}/>
     </Routes>
    </BrowserRouter>
    )
};

export default App;

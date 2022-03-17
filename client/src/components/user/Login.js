import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/api';
import img from './Quiz.png'
import './userstyle.css'

const initialize = {
  email: '',
  password: ''
}
const Login = () => { 

  let navigate = useNavigate();
  const [user, setUser] = useState(initialize);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  
  const FormLogin = async (e) => {
    e.preventDefault();
    let data  = await getUser();
    for ( const id of data ){
        if (user.email == id.email && user.password == id.password) {
          // alert('userlogin')
          localStorage.setItem('user', JSON.stringify(id));
          navigate(`/user`);

        }

    }
    // alert('user Not Found')
    
  }
  return (
    <>
    <div className="bodycontainer">
        <div className="container">
        <div className="form-container">
          <div className="signin-signup">
            <form onSubmit={FormLogin} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="email" name='email' 
                  onChange={(e) => changeHandler(e)}
                  placeholder="Email"
                  required />
                </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name='password' 
                onChange={(e) => changeHandler(e)} 
                placeholder="password" 
                required />
              </div>
                <input type="submit" className="btn solid" value='login'/>
                {/* <input className="btn btnlogin" type='submit' /> */}

                <p className="social-text">Not Register <Link to='/sign' style={{color:'green'}}>Sign Up</Link></p>

                <p className="social-text">Or Sing in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className='fab fa-linkedin'></i></a>
                  <a href="#" className="social-icon">
                    <i className='fab fa-twitter'></i></a>
                  <a href="#" className="social-icon">
                    <i className='fab fa-google'></i></a>
                  <a href="#" className="social-icon">
                    <i className='fab fa-facebook-f'></i></a>
                 </div>
                </form>
                </div>
          </div>
        </div></div>
      {/* <div className='login__container'>
        <form onSubmit={FormLogin} class="modal__form">
            <img src={img} alt="logo" />
            <input type="email" name='email' onChange={(e) => changeHandler(e)} placeholder="Email" required />
            <input type="password" name='password' onChange={(e) => changeHandler(e)} placeholder="password" required />
            <div className=' navigator'>
              <a href='/sign' >SignUp</a>/
              <a href='/#' >Forget password</a>
            </div>
            <input className="btn btnlogin" type='submit' />
          </form>
      </div> */}
    </>
  )
};

export default Login;

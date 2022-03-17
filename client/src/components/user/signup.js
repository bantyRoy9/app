import React, { useState } from 'react'
import { userCreate } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom'
import './userstyle.css'

const initialize = {
  name:'',
  email:'',
  password:''
}

const Signup = () => {
  let navigate = useNavigate();
  const [user, setuser] = useState(initialize);
  
  const changeHandler=(e)=>{
    setuser({...user, [e.target.name]: e.target.value});
  }
  const formSubmit= async(e)=>{
    e.preventDefault();
    await userCreate(user);
    navigate('/')

  }
  return (
    <>
    <div className="container">
        <div className="form-container">
          <div className="signin-signup">
            <form onSubmit={formSubmit} className="sign-in-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input  type="text"
              placeholder="Full Name"
              name='name'
              onChange={(e)=> changeHandler(e)}
              required/>
                </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input  type="email" placeholder="Email" name='email'
              onChange={(e)=> changeHandler(e)}
              required />
                </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input 
              type="password"
              placeholder="password"
              name='password'
              onChange={(e)=> changeHandler(e)}
              required/>
                </div>
                <input type="submit" to='/link' className="btn solid" value='SignUp'/>
                <p className="social-text">All ready Register   <Link to='/login' style={{color:'green'}}>Login</Link></p>
                <p className="social-text">Or Sing Up with social platforms</p>
                <div className="social-media">
                  <a href="#still-working" className="social-icon">
                    <i className='fab fa-linkedin'></i></a>
                  <a href="#still-working" className="social-icon">
                    <i className='fab fa-twitter'></i></a>
                  <a href="#still-working" className="social-icon">
                    <i className='fab fa-google'></i></a>
                  <a href="#still-working" className="social-icon">
                    <i className='fab fa-facebook-f'></i></a>
                 </div>
                </form>
                </div>
          </div>
        </div>
    {/* <div class="login__container">    
      <h1 class="modal__header"> Register Here...</h1>
      <form onSubmit={formSubmit} class="modal__form">
       <input  type="text"
              placeholder="Name"
              name='name'
              onChange={(e)=> changeHandler(e)}
              required/>
        <input  type="email" placeholder="Email" name='email'
              onChange={(e)=> changeHandler(e)}
              required/>
        <input 
              type="password"
              placeholder="password"
              name='password'
              onChange={(e)=> changeHandler(e)}
              required/>
            <div style={{display:'flex', justifyContent:"space-between",gap:10}} className=' navigator'>
              <a href='/login' >Already Registered</a>/
              <a href='/forget' >Forget password</a>
            </div>
            {/* <button type='submit' class="btn" id="createBtn" onClick={(e)=>formSubmit(e)}>Continue &rarr;</button> 
            <input className='btn' type="submit"/>
      </form>
    </div> */}
  </>
  )
}

export default Signup
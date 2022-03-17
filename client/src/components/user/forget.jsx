import React from 'react';
// import { useNavigate } from 'react-router-dom';

const forget = () => {
    // let navigate = useNavigate();
  return(
  <>
      <div class="modal">    
      <form class="modal__form">
      <p class="modal__header">
        Continue with email..
      </p>
            {/* <input  type="text" placeholder="Name" id="Name" required/> */}
            <input type="email" placeholder="Email" required/>
            {/* <input type="password" placeholder="password" required/> */}
            <div style={{display:'flex', justifyContent:"space-between",gap:100}} className=' navigator'>
              <a href='/sign' >SignUp</a>
              <a href='/login' >Login</a>
            </div>
            <button class="btn" id="createBtn" onClick={()=>{('/login')}}>Continue &rarr;</button>
      </form>
    </div>
    </>
  )};

export default forget;

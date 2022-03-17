import React from 'react';
import { NavLink } from 'react-router-dom';

const submit = () => {
  return <>
        <div class="modal__form">
        <h1 class="modal__header">THANK YOU</h1>
        <NavLink to='/'>Go to home page</NavLink>
        </div> 
  </>;
};

export default submit;

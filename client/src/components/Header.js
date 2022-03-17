import React, { useState } from 'react';
import { makeStyles } from '@mui/styles'
import { Link, useNavigate } from 'react-router-dom';
import { height } from '@mui/system';


const useStyle = makeStyles({
    navheader: {
        display: 'flex',
        alignItems: 'center',
        background: '#5ec576',
        justifyContent: 'end',
        padding: '10px 50px', 
        color: 'white',
        height: '7.5vh',
    },
    img: {
        border: '1px solid rgba(0,0,0,0.1)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'white'
    },
    nav: {
        gap:'0px',
        margin:'5px',
        '& > p':{
            textTransform:'uppercase',
            marginTop:'5px',
            marginBottom:'-10px',
            fontSize:'17px'
            
        },
        '& > span':{
            color:'whiteSmoke',
            fontSize:'10px'
        }
     
    },
    

})


const Header = () => {
    const navigation = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'))

    const classes = useStyle();
    const [toggle, setToggle] = useState(false);
   
   function logOutHandler(){
       console.log('work');
        localStorage.removeItem('user');
        navigation('/');
    
    }
    
    return (
        <>
            <div className={classes.navheader}>
                <div className={classes.nav}>
                    <p>{data.name}</p>
                    <span>40627202818</span>
                </div>
                <img src="https://img.icons8.com/ios/50/000000/user--v3.png" className={classes.img} 
                onClick={() => { (toggle === false) ? setToggle(true) : setToggle(false) } }/>
             </div>
            {toggle && (
                <div className='section_user '>
                    <div className='user_btn' onClick={() => setToggle(false)}>
                        <Link to='#'><p><i class="fa-solid fa-square-poll-vertical"></i> Show Resault </p></Link>
                        <Link to='/'><p><i class="fa-solid fa-pen"></i> Application Review</p></Link>
                        <Link to='#'><p><i class="fa-solid fa-pen"></i> change Password</p></Link>
                        <button onClick={logOutHandler}><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
                    </div>
                </div>
            )}
        </>
    )
};

export default Header;

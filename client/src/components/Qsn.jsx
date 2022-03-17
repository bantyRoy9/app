import React, { useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate} from 'react-router-dom'

const useStyle = makeStyles({
    container:{
        height:350,
        width:'100%',
        marginTop:"5%",
        borderRadius:10,
    } ,
    qsnno:{
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'10px',
        fontSize:'12px',
        color:'#5ec576'
        
    },
    qsn:{
        margin:'10px',
        '& > span':{
            color:'#5ec576'

        }        
    },
    qsnOption:{
        marginTop:'20px',
        '&>input':{
            marginLeft:'-510px',
            margin:'10px'
        }
    },
    submit_content:{
        position:'absolute',
        // border:'1px solid red',
        width:'100%',
        height:'12vh',
        bottom:0,
        marginLeft:'-16.65%',
        background:'#5ec576'
    },
    btn:{
        position:'absolute',
        // left:920
    }
})
    let ans=[];
    let selectedoption;
    
    
    
    
    
const Qsn = ({qsn}) => {
    const option = qsn.option;
    const classes = useStyle();
    let navigate = useNavigate()
    const [ clickAns, setClickAns ] = useState({});
    const [ ans, setAns ] = useState({});
    function onvaluechange1(e){
        setClickAns({ ...clickAns, [e.target.name]: e.target.value})
        setAns({ ...ans , [qsn.No]: qsn.ans})
     
    }
    const totalAns = Object.values(clickAns);
    const orgAns = Object.values(ans);
    
    // console.log(clickAns);
    // console.log(ans);
    
    function formsubmit(e){
        e.preventDefault();
        let correct = 0,
            incorect = 0;

        for(let i =0; i< totalAns.length; i++ ){
            if(orgAns[i] === totalAns[i]){
                console.log('correct');
                correct++
            }else{
                console.log('incorect');
                incorect++
            }
        }
        alert(`your test submitted Correct Ans: ${correct} & Incorrect Ans: ${incorect}`)
        // console.log(clickAns);
        navigate('/submit')
        
    }


  return(
    <div className={classes.container}>
    <hr />
    <div className={classes.qsnno}>
       <h3>Question No: {qsn.No}</h3>
       <h3>Max. Marks: 1</h3>
       <p></p>
       <p></p>
       <p></p>
    </div>
    <div className={classes.qsn}>
       <span >Multiple Choice ( Select 1 out of 4 options )</span>
       <p>{qsn.Q}</p>
    </div>
    <hr />
    <form onSubmit={formsubmit}>
        <div className={classes.qsnOption}>
            {/* { Object.entries(option).map(([key,value],i) =>{
               
               console.log(key,value,i) })} */}
            {/* {qsn.option.map(el=>console.log(el))} */}
            <input type="radio" name={ qsn.No}  value="a" chacked={selectedoption ==="a"} onChange={onvaluechange1} />{qsn.option.a} <br />
            <input type="radio" name={ qsn.No}  value="b" chacked={selectedoption ==="b"} onChange={onvaluechange1} />{qsn.option.b}<br />
            <input type="radio" name={ qsn.No} value="c" chacked={selectedoption ==="c"} onChange={onvaluechange1} />{qsn.option.c}<br />
            <input type="radio" name={ qsn.No} value="d" chacked={selectedoption ==="d"} onChange={onvaluechange1} />{qsn.option.d}<br />
        </div>
     
     <div className={classes.submit_content}>
     <button type="reset" className='btn__cancel'>Cancel</button>
     <input type="submit" className= 'btn__submit' />
     </div>
     </form>
   </div>
  );
};

export default Qsn;

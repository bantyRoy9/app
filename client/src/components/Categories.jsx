import React from 'react';
import { makeStyles } from '@mui/styles'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    tableBlock:{
        display:'flex',
        justifyContent:'end',
        position:'absolute',
        width:'97%',
        margin:'auto',
        height:'9%'
        
    },
    btn:{
        margin:'auto 0px',
        '&>button':{
            padding:'10px',
            margin:'10px',
            cursor:'pointer'
        }
    },
    table:{
        width:'80%',
        height:'73vh',
        marginLeft:'15px',
        borderRight:'1px solid rgba(0,0,0,0.3)',
        '& >P ':{
            marginLeft:'20px',
        }
    },
    tablehead:{
        borderTop:'2px solid #5ec576',
        margin:'25px 20px',
        paddingTop:'20px'
        
    },
    qsnblock:{
        display:'inline-flex',
        width:'46%',
        padding:'1px',
        margin:'1px',        
    },
    qsnNo:{
        border:'1px solid rgba(0,0,0,0.5)',
        // border:'1px solid red',
        padding:'5px',
        

    },
    link:{
        width:'30px',
        padding:'20px',
        // border:'1px solid red',
        

    },

    button:{
        top:5,
        left:5,
        width:'70%'
    }
})
const Categories = (props) => {
    const id= props.id;
    const classes = useStyle();
    
    const {question1,question2,question3,question4,question5,question6,question7,question8,question9,question10 } = id.questions;
    const QsnNo = [question1,question2,question3,question4,question5,question6,question7,question8,question9];
    
  return(
      <>
      <div className={classes.tableBlock}>
        <div className={classes.btn}>
        <button><input type="checkbox" /> Auto Next</button>
        <button>view Instruction</button>
        </div>

      </div>
        
      <div className={classes.table}>
        <p>Question panel</p>
            <div className={classes.tablehead}>
              {
                  QsnNo.map(questionNo=>(
                      <div className={classes.qsnblock}>
                          <div className={classes.qsnNo}>
                             <Link to={`/user/${id._id}/?No=${questionNo.No}`} className={classes.link} > {questionNo.No}</Link>
                        </div>
                      </div>
                  ))
              }
          </div>
      </div>
      </>

  )
};

export default Categories;

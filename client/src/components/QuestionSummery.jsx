import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { Box , Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getQsns } from '../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import Qsn from './Qsn';

const QuestionSummery = (params) => {
   const qsns = params.id;
//    console.log(params);
   const { question1 , question2,question3,question4,question5,question6,question7,question8,question9,question10 } = qsns.questions;
   const qsnsss= [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
    // const [qsns, setQsns] = useState([]);
    const { search}  = useLocation();
    // console.log(search.slice(-1));
    let qsn;
    qsnsss.map(el=>{
        if(el.No == search.slice(-1)){
            qsn = el;
        }
    })
    return(
        <Qsn qsn={qsn} />
        // qsnsss.map(qsn => (
        //     // console.log(qsn)
        // ))
        // )
    )};

export default QuestionSummery;

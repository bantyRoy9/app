import { Grid } from '@mui/material';
import React from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import { getUserid, getQsnid } from '../services/api';
import Header from './Header';

import Categories from './Categories';
import QuestionSummery from './QuestionSummery';
import { useState, useEffect } from 'react';

const  Home = ({ match })=> {
  const navigation = useNavigate();
  const { id } = useParams();
  const [ user, setUser ] = useState();
  useEffect(()=>{
      const fetchData = async () =>{
        // let data = await getUserid(id);
        let data = await getQsnid(id);
        setUser(data); 
        // if(!data){
        //   console.log('work');
        //   navigation('/');
        // } 
      }
      fetchData();
    },[]);
    // console.log(user);
  
  return(
    <>
    <Header />
    <Grid container>
      <Grid item lg={2} xs={12} sm={2} >
        { user && <Categories id={user}/>}
        </Grid>
      <Grid container item lg={10} xs={12} sm={10}>
        { user && <QuestionSummery id={user}/>}

      </Grid>
    </Grid>
    </>
  )
}

export default Home;

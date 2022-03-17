import React, { useState } from 'react'
import Header from '../Header'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import { useEffect } from 'react'
import { getUserid, getQsnBlock } from '../../services/api'

const Detail = ({ match }) => {
  
  const sub = [1,2,3,4,5,6,7,8];

  const { id } = useParams();

  const [ qsns, setQsns ] = useState([]);
  useEffect(()=>{
    const fetch = async()=>{
      let data = await getQsnBlock();
      setQsns(data);
    }
    fetch();
  },[]);
  console.log(qsns);

  return (
    <>
    <Header/> 
    <div className='container'>
      <div className="objsection">
        <div className="section1">
          <p className="check"><i class="fa-solid fa-check"></i> Select a test to continue</p>
          <div className="subsection">
            <div> <p>View courses</p></div>
            <input type="text"  placeholder='search Test' />
          </div>
        </div>
        <div className="section2">
          {qsns.map(qsn=>(
          <div className="card">
            <p>{qsn.subjectName}</p>
            <div className="grid">
              <p>Test Assigned</p>
              <p>1</p>
              <p>Test Taken</p>
              <p style={{color:'red'}}>1</p>
              <p style={{height:'10px'}}><i class="fa-regular fa-clock" ></i></p>
              <p>90 mins</p>
            </div>
           <Link to={`/user/${qsn._id}/?No=1`} className="btn">Continue</Link>
          </div>
          ))}
        </div>
        
      </div>
        <h1></h1>
    </div>
    </>
  )
}

export default Detail
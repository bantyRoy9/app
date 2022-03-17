import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import img from './Quiz.png'
import img1 from './img.png'
import img2 from './img2.png'
import img3 from './img3.png'

const homes = () => {
  return (
    <div className='home__container'>
      <div className="nav">
        <div className="navItems">
          <div className="navlogo">
            <img src={img} alt="logo" />
          </div>
          <div className="navLinks">
            <a href="/">Solution<i class="fa-solid fa-angle-down"></i></a>
            <a href="/">About Us<i class="fa-solid fa-angle-down"></i></a>
            <a href="/">Contact<i class="fa-solid fa-angle-down"></i></a>
            <a href="/">Carrier</a>
            <a href="/">EN<i class="fa-solid fa-angle-down"></i></a>
            <a href="/login">Take Assesment</a>
          </div>
        </div>
      </div>
      <div className="home_Content">
              <div className="home_text">
          
                  <h1>Let's Test your knowladge's ability</h1>
          
                  <p>Lorem ipsum dollit. Praesentium minima facilis delectus similique, hic ullam aperiam error consequatur ex dignissimos.</p>
          

                  <a href="/login" className='btn'>Take Asses.</a>
              </div>
              <img src={img1} alt="" />
    
      </div>

      <div className="subject">
        <h4>Subject wise organize questions </h4>
        <div className="subjectIcon">
         <a href=''><i class="fa-brands fa-js"></i>JavaScript</a>
         <a href=''><i class="fa-brands fa-react"></i>React.js</a>
         <a href=''><i class="fa-brands fa-node"></i>Node.js</a>
         <a href=''><i class="fa-brands fa-css3"></i>Cascading Style Sheets</a>
         <a href=""> <i class="fa-brands fa-html5"></i>HTML</a>
         </div>
      </div>
      <div>
        <h1>Still Working......</h1>
      </div>
    </div>
  )
}

export default homes
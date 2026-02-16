import React from 'react'
import Common from '../Componant/Common'
import imgAnil from "../Img/anil.jpeg"
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <>

      <Common>
        <div className=' container fluid '>
          <div className='row' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <div className='col col-md-6 col-lg-6' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={imgAnil} alt="Anil Yadav" style={{ width: '400px', height: '400px', borderRadius: '50%', margin: '20px', boxShadow: '0 4px 8px rgba(251, 248, 248, 0.9)' }} />
            </div>
            <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h1 style={{ color: 'white', fontFamily: "serif", fontStyle: "bold" }}><span style={{ color: 'skyblue' }}>LET'S INTRODUCE</span><br /> MY SELF</h1>
              <p style={{ color: 'white' }}>I am Anil Yadav, a passionate full-stack java developer
                with a BCA in Cross-plateform(android apps ,ios apps, desktop apps and web apps) Learning .
                I specializ in building responsive and user-friendly web
                applications using modern technologies like React, JavaScript, HTML, and CSS
                and android apps ,desktop apps using java.
                I have a strong foundation in Java programming and a keen eye for detail,
                which allows me to create efficient and scalable
              </p>

            </div>
          </div>
        </div>
        <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='row '>
            <div className='col col-md-6 col-lg-6'> <Link to="/education" >
              <button className="btn btn-primary p-2" style={{ width: 150, background: 'linear-gradient(to right, #00e1ff, #92fe9d)' }}> Know more</button> </Link>
            </div>
          </div>
        </div>


      </Common>
    </>
  )
}

export default AboutPage
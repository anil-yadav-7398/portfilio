import React from 'react'
import Card from '@mui/material/Card'
import "../StyleSheet/skills.css"


const SkillsPage = () => {
  return (
    <>



      <div className=' mt-5'>
        <h1 style={{ color: 'white', fontFamily: "serif", fontStyle: "bold", textAlign: 'center', marginTop: '50px' }}><span style={{ color: 'skyblue' }}>MY SKILLS</span></h1>
        <p style={{ color: 'white', textAlign: 'center' }}>I have a balence of <spam style={{ color: '#fd8309' }}> Technical</spam> and <spam style={{ color: '#fd8309' }}>Soft Skills</spam> that help me build efficient
          scalable applications while  working effectively in team environments.
          .</p>
      </div>
      <div className='container mt-5' style={{
        display: 'flex', gap: '10px',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div className='row'>
          <div className='col col-md-6 col-lg-6  ' style={{
            display: 'flex', flexDirection: 'column', borderRadius: '15px', alignItems: 'center',
            justifyContent: 'center', height: "100%", boxShadow: "0 4px 8px rgba(251, 246, 246, 0.91)"
          }}>
            < h2 style={{
              textAlign: 'center', color: '#fd8309', fontFamily: "serif",
              fontStyle: "bold", width: "100%", margin: '20px'
            }}>Technical Skills</h2>
            <ul style={{ color: 'white', listStyleType: 'none' }} >
              <div className='container'>
                <div className='row'>
                  <div className='col col-md-6 col-lg-6' style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Card className='car' style={{
                      background: 'linear-gradient(to right, #00e1ff, #fe92bd)',

                      color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%',
                      textAlign: "center"
                    }}> <h1><i class="fa-brands fa-html5"></i></h1> <p>HTML</p></Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-brands fa-css3"></i></h1> CSS</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{
                      background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black',
                      padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center",
                    }}> <h1><i class="fa-brands fa-js"></i></h1>JAVASCRIPT</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-brands fa-react"></i></h1> REACT JS</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-brands fa-bootstrap"></i></h1> BOOTSTRAP</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}> <h1><i class="fa-brands fa-java"></i></h1>JAVA</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-brands fa-spring"></i></h1>SPRING FRAMEWORK</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1>SPRING BOOT</h1></Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-solid fa-database"></i></h1>HIBERNATE ORM</Card>
                  </div><div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-solid fa-database"></i></h1>JDBC</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-solid fa-database"></i></h1>MYSQL</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card className='car' style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center" }}><h1><i class="fa-brands fa-app-store"></i></h1>APLICTION(ANDROID+DESKTOP)</Card>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className='col col-md-6 col-lg-6' style={{ display: 'flex', gap: '10px', borderRadius: '15px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100%", boxShadow: "0 4px 8px rgba(251, 246, 246, 0.91)" }}>
            <h2 style={{ color: '#fd8309', fontFamily: "serif", fontStyle: "bold", textAlign: "center", margin: "10px" }}>Soft Skills</h2>
            <ul style={{ color: 'white', listStyleType: 'none' }}>

              <div className='container'>
                <div className='row'>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-hand-holding-hand"></i></h1>TEAMWORK</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}><h1><i class="fa-solid fa-brain"></i></h1> PROBLEM SOLVING</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}><h1><i class="fa-solid fa-arrows-rotate"></i></h1> ADAPTABILITY</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-clock"></i></h1>TIME MANAGEMENT</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-comment"></i></h1>COMMUNICATION</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-crown"></i></h1>LEADERSHIP</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}><h1><i class="fa-solid fa-lightbulb"></i></h1> CREATIVITY</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-brain"></i></h1>CRITICAL THINKING</Card>
                  </div>
                  <div className='col col-md-6 col-lg-6'>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}> <h1><i class="fa-solid fa-heart"></i></h1>EMOTIONAL INTELLIGENCE</Card>
                  </div>

                  <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={{ background: 'linear-gradient(to right, #00e1ff, #fe92bd)', color: 'black', padding: '10px', marginBottom: '10px', height: '100px', width: '100%', textAlign: "center", boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}><h1><i class="fa-solid fa-briefcase"></i></h1> WORK ETHIC</Card>
                  </div>


                </div>
              </div>
            </ul></div>
        </div>
      </div >


    </>

  )
}

export default SkillsPage
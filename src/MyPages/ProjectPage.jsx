import React from 'react'
import Common from '../Componant/Common'
import Card from '@mui/material/Card'
import project from "../Img/projectManage.png"
import Button from '@mui/material/Button'
import portfilio from "../Img/portfilio.png"
import todo from '../Img/todo.png'
import ecome from '../Img/ecom.jpeg'
const ProjectPage = () => {
  return (
    <Common>
      <div className=' text-center' >
        <h1 style={{ color: "#fe8809", fontFamily: "serif", fontSize: 30, margin: 20 }}>My Projects</h1>
      </div>

      <div className='container'>
        <div className='row  '>
          <div className='col-12  col-md-6  col-lg-6 mb-4 '>
            <Card style={{ borderRadius: "15px", width: "100%", height: "100%", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>

              <img src={project} alt="anil" style={{ height: "400px", width: "100%" }} />
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("https://github.com/anil-yadav-7398/atm-management", "_blank")}> Github Repository</Button>

            </Card>
          </div>

          <div className='col-12  col-md-6  col-lg-6 mb-4 '>
            <Card style={{ borderRadius: "15px", width: "100%", height: "100%", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>

              <img src={ecome} alt="anil" style={{ height: "400px", width: "100%" }} />
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("https://github.com/anil-yadav-7398/ecommerce", "_blank")}> Github Repository</Button>

            </Card>
          </div>



          <div className='col-12  col-md-6  col-lg-6 mb-4 '>
            <Card style={{ borderRadius: "15px", width: "100%", height: "100%", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>

              <img src={todo} alt="anil" style={{ height: "400px", width: "100%" }} />
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("https://github.com/anil-yadav-7398/todoApp", "_blank")}> Github Repository</Button>


            </Card>
          </div>


          <div className='col-12  col-md-6  col-lg-6 mb-4 '>
            <Card style={{ borderRadius: "15px", width: "100%", height: "100%", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>

              <img src={portfilio} alt="anil" style={{ height: "400px", width: "100%" }} />
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
              <Button variant="contained" style={{
                backgroundColor: "#05ffff", color: "white",
                margin: 10
              }} onClick={() => window.open("https://github.com/anil-yadav-7398/portfilio", "_blank")}> Github Repository</Button>

            </Card>

          </div>

        </div>
      </div>


    </Common>
  )
}

export default ProjectPage
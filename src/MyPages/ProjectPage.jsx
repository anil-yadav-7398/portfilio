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
      <div className='container' style={{ margin: "40" }}>
        <div className='row'>
          <div className='col col-md-12 text-center'>
            <h1 style={{ color: "#fe8809", fontFamily: "serif", fontSize: 30, margin: 20 }}>My Projects</h1>
            <Card style={{ width: "50%", margin: "0 auto", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>
              <div className='card-body text-center'>
                <img src={project} alt="anil" style={{ marginTop: "60%", height: 400, width: "95%", borderRadius: 10, margin: 10, boxShadow: "0 0 10px 3px rgba(250, 250, 250, 0.91)" }} />
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("https://github.com/anil-yadav-7398/atm-management", "_blank")}> Github Repository</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className='container ' style={{ margin: "40px" }}>
        <div className='row'>
          <div className='col col-md-12 text-center'>
            <Card style={{ width: "50%", margin: "0 auto", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>
              <div className='card-body text-center'>
                <img src={portfilio} alt="anil" style={{ marginTop: "60%", height: 400, width: "95%", borderRadius: 10, margin: 10, boxShadow: "0 0 10px 3px rgba(250, 250, 250, 0.91)" }} />
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("https://github.com/anil-yadav-7398/portfilio", "_blank")}> Github Repository</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>


      <div className='container ' style={{ margin: "40px" }}>
        <div className='row'>
          <div className='col col-md-12 text-center'>
            <Card style={{ width: "50%", margin: "0 auto", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>
              <div className='card-body text-center'>
                <img src={todo} alt="anil" style={{ marginTop: "60%", height: 400, width: "95%", borderRadius: 10, margin: 10, boxShadow: "0 0 10px 3px rgba(250, 250, 250, 0.91)" }} />
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("https://github.com/anil-yadav-7398/todoApp", "_blank")}> Github Repository</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>


      <div className='container ' style={{ margin: "40px" }}>
        <div className='row'>
          <div className='col col-md-12 text-center'>
            <Card style={{ width: "50%", margin: "0 auto", boxShadow: "0px 0px 10px 3px #fbffff", backgroundColor: "#000000" }}>
              <div className='card-body text-center'>
                <img src={ecome} alt="anil" style={{ marginTop: "60%", height: 400, width: "95%", borderRadius: 10, margin: 10, boxShadow: "0 0 10px 3px rgba(250, 250, 250, 0.91)" }} />
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("#", "blanck")} >Live Demo</Button>
                <Button variant="contained" style={{
                  backgroundColor: "#05ffff", color: "white",
                  margin: 10
                }} onClick={() => window.open("https://github.com/anil-yadav-7398/ecommerce", "_blank")}> Github Repository</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

    </Common>
  )
}

export default ProjectPage
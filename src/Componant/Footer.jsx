import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (

    <><div style={{ textAlign: 'bottom' }}>
      <hr style={{ height: 50, color: 'skyblue' }} />
      <div className="footer-content col col-md-12 col-lg-12" style={{ textAlign: 'center', padding: 20, backgroundColor: '#333', color: 'white' }}>
        © 2026 <span style={{ color: 'skyblue', fontFamily: " Arial sans-serif", fontStyle: "bold" }}> ANIL YADAV </span>.All rights reserved
        <h6> <EmailIcon style={{ color: 'whiter' }} /> anil.yaduvanshi.7398@gmail.com</h6>
        <h6><CallIcon style={{ color: 'white' }} /> +91 7398392136</h6>

        <div> <GitHubIcon onClick={() => window.open('https://github.com/anil-yadav-7398', '_blank')} style={{ color: 'white' }} /><i class="fa-brands fa-square-instagram" onClick={() => window.open('https://www.instagram.com/anil_yadav_7398', '_blank')}></i><LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/anil-yadav-005aba368?utm_source=share_via&utm_content=profile&utm_medium=member_android', '_blank')} style={{ color: 'white' }} /> </div>
      </div>
    </div>

    </>

  )
}

export default Footer
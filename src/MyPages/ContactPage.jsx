import React from 'react'
import Common from '../Componant/Common'
import Card from '@mui/material/Card'
import { useState } from 'react'

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6728be2b-4de6-43be-a20c-e6190ad92609");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      setResult("Error");
      alert(data.message);
    }
  };
  return (
    <>
      <Common>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col col-md-6'>
              <h1 style={{ textAlign: 'center', marginTop: 50, color: 'skyblue', margin: 20, fontFamily: "serif", fontSize: 40 }}>Contact Me <p style={{ color: "green" }}> {result}</p></h1>
              <Card className='col col-md-12 col-lg-12' style={{ alignItems: "center", background: 'linear-gradient(to right, #424546)', color: 'black', padding: '20px', marginBottom: '20px', boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}>
                <form onSubmit={{ onSubmit }}>
                  <label style={{ color: "white ", fontFamily: "serif", fontSize: 20 }}> Full Name:</label><br />
                  <input type="text" placeholder='Enter Your Name'
                    style={{ color: "black ", fontFamily: "serif", fontSize: 20, margin: 10, padding: 5, width: '100%' }} required />
                  <br />
                  <label style={{ color: "white ", fontFamily: "serif", fontSize: 20, }}> Email    :</label><br />
                  <input type="email" placeholder='Enter Your Email'
                    style={{ color: "black ", fontFamily: "serif", fontSize: 20, margin: 10, padding: 5, width: '100%' }} required />
                  <br />
                  <label style={{ color: "white ", fontFamily: "serif", fontSize: 20, margin: 10 }}> Message:</label><br />
                  <textarea placeholder='Enter Your Message'
                    style={{ color: "black ", fontFamily: "serif", fontSize: 20, margin: 10, padding: 5, width: '100%', height: '100px' }} required />
                  <br />
                  <div className=' text-center mt-3'>
                    <button style={{
                      alignItems: "center", padding: '10px 20px',
                      backgroundColor: '#00ff7b', color: 'white', border: 'none', borderRadius:
                        '5px', cursor: 'pointer'
                    }} >Send massege</button>
                    <p style={{ color: "white" }}>Need Help?<spam style={{ color: 'skyblue' }}> Contact Support</spam></p>
                    <br />
                    <div style={{ color: "white", fontSize: 20 }}>
                      <i class="fa-brands fa-facebook" onClick={() => window.open('https://www.facebook.com/share/1Zertmiw93/', '_blank')}></i><i class="fa-brands fa-square-instagram" onClick={() => window.open('https://www.instagram.com/anil_yadav_7398', '_blank')}></i><i class="fa-brands fa-linkedin" onClick={() => window.open('https://www.linkedin.com/in/anil-yadav-005aba368?utm_source=share_via&utm_content=profile&utm_medium=member_android', '_blank')}></i><i class="fa-brands fa-github" onClick={() => window.open('https://github.com/anil-yadav-7398', '_blank')}></i>
                    </div>
                  </div>
                </form>
              </Card>

            </div>
          </div>
        </div>

      </Common>

    </>)
}

export default ContactPage
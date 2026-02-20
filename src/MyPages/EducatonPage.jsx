import React from 'react'
import Common from '../Componant/Common'
import Image from '../Img/jagadguru.jpeg'
import JIC from '../Img/jic.jpeg'
import anil from '../Img/anil.jpeg'
import Button from '@mui/material/Button'
const EducatonPage = () => {
  const [Open, setOpen] = React.useState(false);
  let [Open12, setOpen12] = React.useState(false);

  return (
    <>
      <Common>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col col-md-6'>
              <h1 style={{ textAlign: 'center', marginTop: 50, color: 'skyblue', margin: 20, fontFamily: "serif", fontSize: 40 }}>Education</h1>
              <div className='card' style={{ background: 'linear-gradient(to right, #424546)', color: 'white', padding: '20px', marginBottom: '20px', boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}>
                <img src={Image} onClick={() => window.open('https://jrdsu.org', '_blank')} alt="Jagadguru" style={{ borderRadius: 15, boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)", objectFit: 'contain', width: '100%', height: '100%' }} />

                <h3 style={{ textAlign: 'center', margin: 10 }}>Bachelor of Computer Application (BCA)</h3>
                <p style={{ textAlign: 'center', }}>Jagadguru Rambhadracharya Divayang  State Univercity chitrakoot U.P</p>
                <p style={{ textAlign: 'center', }}>2024 - 2027</p>
                <Button onClick={() => setOpen(true)} style={{ backgroundColor: 'skyblue', color: 'black', border: 'none', padding: '10px 20px', borderRadius: 5, cursor: 'pointer' }}>
                  Know more
                </Button>
              </div>
              <div className='card' style={{ background: 'linear-gradient(to right, #424546)', color: 'white', padding: '20px', marginBottom: '20px', boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)" }}>
                <img src={JIC} alt="JIC" style={{ borderRadius: 15, boxShadow: "0 0 10px 1px rgba(251, 246, 246, 0.91)", objectFit: 'contain', width: '100%', height: '100%' }} />

                <h3 style={{ textAlign: 'center', margin: 10 }}> Intermediate Education (10+2)</h3>
                <p style={{ textAlign: 'center', }}>Shree Ganga Prasad Jansewa Inter Collage karwi ChitraKoot U.P </p>
                <p style={{ textAlign: 'center', }}>Year of Passing - 2024</p>
                <Button onClick={() => setOpen12(true)} style={{ backgroundColor: 'skyblue', color: 'black', border: 'none', padding: '10px 20px', borderRadius: 5, cursor: 'pointer' }}>
                  know more
                </Button>
              </div>
            </div>
          </div>
        </div>

        {Open12 && (
          <div onClick={() => setOpen12(false)
          } style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#000000', padding: 20, borderRadius: 10, width: '80%', maxWidth: 500 }}>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col col-md-12 col-lg-6 text-center'>
                    <img src={anil} alt="anil" style={{ marginTop: "60%", height: 200, width: 200, borderRadius: 10, margin: 10, boxShadow: "0 0 10px 1px rgba(92, 143, 214, 0.91)" }} />
                  </div>
                  <div className='col col-md-12 col-lg-6 ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h5 style={{ color: '#ff9100', fontFamily: "serif", fontSize: 20, margin: 10 }}>Anil Yadav</h5>
                    <p style={{ color: 'white', fontFamily: "serif", fontSize: 16, margin: 10 }}>I have complited 10+2 (Intermediate)in shree Ganga Prashad Jansewa Inter College Karwi Chitrakoot Utter Pradesh.I am a student of vocational education and  My Head of Department is Mr. Anil Kumar Singh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {Open && (
          <div onClick={() => setOpen(false)
          } style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#000000', padding: 20, borderRadius: 10, width: '80%', maxWidth: 500 }}>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col col-md-12 col-lg-6 text-center'>
                    <img src={anil} alt="anil" style={{ marginTop: "60%", height: 200, width: 200, borderRadius: 10, margin: 10, boxShadow: "0 0 10px 1px rgba(92, 143, 214, 0.91)" }} />
                  </div>
                  <div className='col col-md-12 col-lg-6 ' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h5 style={{ color: '#ff9100', fontFamily: "serif", fontSize: 20, margin: 10 }}>Anil Yadav</h5>
                    <p style={{ color: 'white', fontFamily: "serif", fontSize: 16, margin: 10 }}>I am currently pursuing a Bachelor of Computer Application (BCA) degree at Jagadguru Rambhadracharya Divyang State University in Chitrakoot, U.P.
                      I am passionate about technology and eager to expand my knowledge and skills in the field of computer applications.
                      I am dedicated to my studies and look forward to a successful career in the tech industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Common>

    </>)
}

export default EducatonPage

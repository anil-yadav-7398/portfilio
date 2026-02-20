import React from 'react'
import Common from '../Componant/Common'
import imgAnil from "../Img/anil.jpeg"
import resume from "../pdf/Anil.pdf"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
const HomePage = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const words = ["FULL STACK JAVA DEVELOPER", " FRONTEND DEVELOPER", "BACKEND DEVELOPER", "UI/UX DESIGNER"];
        const currentWord = words[index];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setText(currentWord.substring(0, text.length + 1));

                if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // Deleting
                setText(currentWord.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 80 : 120);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);


    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = "AnilYadavResume.pdf"; // Extract the file name from the path
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (

        <>
            <Common>
                <div className=' container fluid '>
                    <div className='row' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                        <div className='col col-md-6 col-lg-6' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={imgAnil} alt="Anil Yadav" style={{ width: '400px', height: '400px', borderRadius: '50%', marginRight: '30px' }} />
                        </div>
                        <div className='col col-md-6 col-lg-6' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h1 style={{ color: 'white', fontFamily: "serif", fontStyle: "bold" }}><span style={{ color: 'skyblue' }}>HELLO I'M</span><br /> ANIL YADAV</h1><h5 style={{ color: '#fc6908', fontFamily: "serif" }}>{text}<spam>|</spam></h5>
                            <p style={{ color: 'white' }}>I'm a full Stack Java Developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React. I'm always looking for new challenges and opportunities to learn and grow as a developer.</p>

                        </div>
                    </div>
                </div>
                <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='row '>

                        <div className='d-flex flex-column flex-md-row justify-content-center gap-3'>
                            <Link to="/about" >    <Button className="btn btn-primary p-2" style={{ width: 150, margin: 10, padding: 10 }}>About me </Button></Link>
                            <Button className="btn btn-primary p-2" style={{ width: 150, margin: 10, padding: 20 }} onClick={handleDownloadCV}> Download CV </Button>
                        </div>
                    </div>
                </div>


            </Common >
        </>)
}

export default HomePage
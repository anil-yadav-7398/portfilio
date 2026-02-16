import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Common = ({ children }) => {
    return (
        <>
            <div style={{ backgroundColor: '#080101', minHeight: '100vh' }}>
                <NavBar />
                {children}
                <Footer />
            </div>

        </>

    )
}

export default Common
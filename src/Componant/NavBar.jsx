
import "../StyleSheet/NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid" style={{ background: "#353434" }}>
                    <h1 class=" text-white" style={{ fontFamily: "serif" }}>* ANIL YADAV *</h1>
                    <button class="navbar-toggler " type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation" style={{ background: "white", marginRight: "20px" }}>
                        <span class="navbar-toggler-icon text-white" ></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav   me-auto mb-2 mb-lg-0 text-white" style={{ fontFamily: "serif", fontSize: "20px" }}>

                            <li class="nav-item">
                                <Link to="/" >HOME</Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/about" >ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/skills ">SKILLS</Link></li>

                            <li>
                                <Link to="/projects">PROJECTS</Link>
                            </li>
                            <li>
                                <Link to="/education">EDUCATION</Link>

                            </li>
                            <li>
                                <Link to="/contact">CONTACT</Link>

                            </li>

                        </ul>


                    </div>
                </div>
            </nav>

        </>)
}

export default NavBar
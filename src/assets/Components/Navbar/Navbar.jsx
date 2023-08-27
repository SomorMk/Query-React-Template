import React from 'react'
import Logo from '../../../../public/images/logo.png'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
        <div className="container">
            <a className="navbar-brand" href="index.html"><img src={Logo} alt="LOGO" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Information</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Culture</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
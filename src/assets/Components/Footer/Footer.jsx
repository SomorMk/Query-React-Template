import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <footer id="footer">
        <div className="container">
            <div className="row footer_top">
                <div className="col-lg-4 col-12 col-sm-4">
                    <div className="footer_logo">
                        <a href="index.html"><img src="images/logo.png" alt="LOGO" /></a>
                    </div>
                </div>
                <div className="col-lg-8 col-12 col-sm-8">
                    <div className="footer_top_btns">
                        <ul>
                            <li><a href="#">Ready to explore?</a></li>
                            <li><a className="active" href="#">Get started</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row footer_mid">
                <div className="col-lg-4">
                    <div className="footer_mid_left">
                        <h4>Let's go on vacation, Make your day</h4>
                        <a href="#">Terms & Conditions</a>
                        <ul className="social_icon">
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-2">
                    <div className="footer_mid_right">
                        <div className="row">
                            <div className="col-lg-4 col-6 col-sm-4">
                                <h6>Services</h6>
                                <ul>
                                    <li><a href="#">Email Marketing</a></li>
                                    <li><a href="#">Campaigns</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">Offline</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-6 col-sm-4">
                                <h6>About</h6>
                                <ul>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Benefits</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Term</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-12 col-sm-4">
                                <h6>Help</h6>
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer_bottom">
                <div className="col-lg-12">
                    <p>Copyright 2023 <a href="index.html">QWERy</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
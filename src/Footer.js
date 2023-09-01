import React from 'react';
import Logo from '../src/img/Logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import your footer styles
import Playstore from '../src/img/Playstore.png'
import Appstore from '../src/img/Appstore.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img href='/#' className='Logo' src={Logo} alt='Logo' />
                    <h4> <a href='/#' className='Title'>THOONI</a></h4>
                </div>
                <div className="footer-links">

                    <ul className='first-footer-links'>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                    </ul>


                    <ul className='second-footer-links'>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#consultation">Designer Consultation</a></li>
                    </ul>

                </div>
                <div className="footer-download">
                    <p>Click to download our app now</p>
                    <div className="download-links">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.thooni.thooni"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Playstore} alt="Google Play Store" />
                        </a>
                        <a
                            href="https://itunes.apple.com/us/app/your-app-name/id1234567890?mt=8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Appstore} alt="Apple App Store" />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='last-links'>
                <div className="footer-copy">
                    <p>© {new Date().getFullYear()} Thooni.com. All Rights Reserved.</p>
                    <div className="footer-links2">
                        <a href="/privacypolicy">Privacy |</a>  <a href="/termsofservice"> | Terms of Service</a>
                    </div>
                </div>
                <ul className="social-icons">
                    <li><a href="#Facebook"><FaFacebookF /></a></li>
                    <li><a href="#Instagram"><FaInstagram /></a></li>
                    <li><a href="#Twitter"><FaTwitter /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
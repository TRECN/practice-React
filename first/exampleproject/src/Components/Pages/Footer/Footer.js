import React from 'react'
import './Footer.css'
import Button from '../../Button'
import {Link} from 'react-router-dom'
import {
    FaFaceBook,
    FaInsgtagram,
    FaToutube,
    FaTwitter,
    FaLinkedin
}from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our exclusive membership to recive the latest news and trends
                </p>
            </section>
        </div>
    )
}

export default Footer

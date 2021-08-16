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
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        className="footer-input" 
                        name='email' 
                        type='email'
                        placeholder='Your Email'/>
                    </form>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </div>
            </section>
        </div>
    )
}

export default Footer

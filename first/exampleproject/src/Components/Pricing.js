import React from 'react'
import { FaFire } from 'react-icons/fa'

function Pricing() {
    return (
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <div className="pricing__hrading">
                        <div className="pricing__container">
                            <Link to="/sign-up" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire/>
                                    </div>
                                    <h3>Stater</h3>
                                    <h4>$58.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing

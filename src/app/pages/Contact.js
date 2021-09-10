import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="section-container">
                <div className="section-title">
                    <h2 className="title">Contact</h2>
                </div>
                <p className="text-center">Here are the means to contact me</p>
                <div className="contact-container">
                    <div className="contact-box">
                        <i className="fas fa-envelope"></i>
                        <span className="text-email"></span>
                        <Link target="_blank" 
                        to={{pathname:"mailto:waldir.sanchez@hotmail.com"}} rel="noopener noreferrer" className="btn-contact">
                            send<i className="material-icons-round">arrow_forward</i>
                        </Link>
                    </div>
                    <div className="contact-box">
                        <i className="fab fa-linkedin-in"></i>
                        <span className="text-linkedin"></span>
                        <Link target="_blank" 
                        to={{pathname:"https://www.linkedin.com/in/waldir-carlos-sanchez-peralta"}} rel="noopener noreferrer" className="btn-contact">
                            go<i className="material-icons-round">arrow_forward</i>
                        </Link>
                    </div>
                    <div className="contact-box">
                        <i className="fab fa-telegram-plane"></i>
                        <span className="text-telegram"></span>
                        <Link target="_blank" 
                        to={{pathname:"https://telegram.me/Waldir_Sanchez29"}} rel="noopener noreferrer" className="btn-contact">
                            send<i className="material-icons-round">arrow_forward</i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

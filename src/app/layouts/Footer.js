import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to={{pathname:'#'}} className="btn-footer">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to={{pathname:'#'}} className="btn-footer">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to={{pathname:'#'}} className="btn-footer">
                    <i className="fab fa-github"></i>
                </Link>
                <Link to={{pathname:'#'}} className="btn-footer">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </div>
            <div className="footer-copyright">
                <span>Copyright © ${new Date().getFullYear()}. All Rights Reserved</span>
            </div>
        </footer>
    )
}

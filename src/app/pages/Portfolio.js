import React from 'react'
import { Link } from 'react-router-dom';
import Py1 from "../../assets/Captura3.png";
import Py2 from "../../assets/Captura2.png";

const Portfolio = () => {
    return (
        <section className="section" id="portfolio">
            <div className="section-container">
                <div className="section-title">
                    <h2 className="title">Portfolio</h2>
                </div>
                <p className="text-center">Below I show some of my projects</p>
                <div className="portfolio-container">
                    <div className="portfolio-content py">
                        <img src={Py1} alt="pj" className="project" />
                        <div className="portfolio-description">
                            <h3 className="portfolio-title">Calculadora IP</h3>
                            <p>HTML, CSS, JS</p>
                            <div className="portfolio-buttons">
                                <Link target={"_blank"} className="btn-plink"
                                    to={{ pathname: "https://ip-calculator.netlify.app/" }}>
                                    <i className="fas fa-globe-americas"></i> Website
                                </Link>
                                <Link target={"_blank"} className="btn-plink ml-15"
                                    to={{ pathname: "https://github.com/WaldirSanchez07/Calculadora-IP.git" }}>
                                    <i className="fab fa-github"></i> Repositorie
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-content py">
                        <img src={Py2} alt="pj" className="project" />
                        <div className="portfolio-description">
                            <h3 className="portfolio-title">LinkBook</h3>
                            <p>React, Node, Express, MongoDB</p>
                            <div className="portfolio-buttons">
                                <Link target={"_blank"} className="btn-plink"
                                    to={{ pathname: "https://linkbook.netlify.app/" }}>
                                    <i className="fas fa-globe-americas"></i> Website
                                </Link>
                                <Link target={"_blank"} className="btn-plink ml-15"
                                    to={{ pathname: "https://github.com/WaldirSanchez07/linkbook-frontend.git" }}>
                                    <i className="fab fa-github"></i> Repositorie
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;

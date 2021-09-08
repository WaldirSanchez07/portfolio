import React from 'react'

const About = () => {
    return (
        <section className="section" id="about">
            <div className="section-container">
                <div className="section-title">
                    <h2 className="title">About</h2>
                </div>
                <div className="about-content">
                    <div className="about-me text-info">
                        <h3 className="sub-title">Who am I?</h3>
                        <span>I am Waldir Sánchez, a systems engineering student and passionate about web development.</span>
                        <p>I am live la libertad - Peru</p>
                    </div>
                    <div className="about-skills">
                        <h3 className="sub-title">My skills:</h3>
                        <div className="grid-container">
                            <div className="card-icon">
                                <i className="fab fa-html5"></i>
                                <div className="skill-name">HTML</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-css3-alt"></i>
                                <div className="skill-name">CSS</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-js"></i>
                                <div className="skill-name">JavaScript</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-bootstrap"></i>
                                <div className="skill-name">Bootstrap</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-php"></i>
                                <div className="skill-name">PHP</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-laravel"></i>
                                <div className="skill-name">Laravel</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-angular"></i>
                                <div className="skill-name">Angular</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-react"></i>
                                <div className="skill-name">React</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-node"></i>
                                <div className="skill-name">Node</div>
                            </div>
                            <div className="card-icon">
                                <i className="fas fa-database"></i>
                                <div className="skill-name">MySQL</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-envira"></i>
                                <div className="skill-name">MongoDB</div>
                            </div>
                            <div className="card-icon">
                                <i className="fab fa-git-alt"></i>
                                <div className="skill-name">Git</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

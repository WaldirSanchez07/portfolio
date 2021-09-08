import React from 'react'
import Navbar from './layouts/Navbar'
import { BrowserRouter as Router } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Footer from './layouts/Footer'
import Contact from './pages/Contact'

const App = () => {
    const body = document.getElementsByTagName("body");
    const btn = document.getElementsByClassName('mod-light-dark');
    body[0].classList.add('light');

    const onMode = () => {
        if(body[0].classList.contains('light')){ 
            body[0].classList.replace("light","dark");
            btn[0].children[0].textContent = "light_mode";
            return;
        }
        body[0].classList.replace("dark","light");
        btn[0].children[0].textContent = "dark_mode";
    }
    return (
        <Router>
            <Navbar/>
            <main className="main">
                <Home />
                <button className="mod-light-dark" onClick={onMode}>
                    <i className="material-icons-round">dark_mode</i>
                </button>
                <div className="main-container">
                    <div className="main-content">
                        <About/>
                        <Portfolio/>
                        <Contact/>
                    </div>
                </div>
            </main>
            <Footer />
        </Router>
    )
}

export default App;


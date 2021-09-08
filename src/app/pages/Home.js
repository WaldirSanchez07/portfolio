import React, { useEffect } from 'react'
import Background from "../../assets/background.jpg"
import Perfil from "../../assets/images/profile.jpg"
import {TypeWriter} from "../_helpers/Writting"

const Home = () => {
    useEffect(()=>{
        initTyping();
    },[]);

    const initTyping = function(){
        const element = document.querySelector(".dynamic-text");
        const words = ["Frontend developer","Backend developer"];
        new TypeWriter(element,words,3000);
    }

    return (
        <section className="_home" id="home">
            <div className="banner-background">
                <img src={Background} alt="background" className="banner-image" />
                <div className="banner-shadow"></div>
            </div>
            <div className="banner-content">
                <div className="banner-profile">
                    <img src={Perfil} alt="profile" className="profile-image" />
                </div>
                <div className="banner-text">
                    <h2 className="hello">Hello!</h2>
                    <h1 className="name">I'm Waldir Sanchez</h1>
                    <div className="wrapper-text">
                        <span className="dynamic-text"></span>
                        <span className="static-text">|</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;

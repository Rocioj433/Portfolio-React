import React from "react";
import "./about.css";

function About() {
    return(
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                  Hi, I'm Rocio 👋 and welcome back to my portfolio!
                    <br />
                    <br />
                    I'm a front-end developer
                </div>
                <div className="about-photo">
                    <img 
                        src={require("../../../assets/image/coding.png").default}
                        className="picture float-left"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
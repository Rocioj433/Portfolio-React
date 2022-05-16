import React from "react";
import "./body.css";
import About from "./about/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Contact from "./contact/index";
import Project from "./projects/index";
import WorkExperience from "./work-experience";

function Body() {
    return(
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="project">
                <Project/>
            </section>
            <section>
                <WorkExperience />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Body;
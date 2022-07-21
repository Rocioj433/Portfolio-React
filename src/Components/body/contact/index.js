import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";

function Contact(){
    return(
        <div className="contact">
            <label className="section-title">Contact</label>
            <hr/>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Do you want to get in touch? You can contact me on any of the following platforms</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../../../assets/resume.pdf").default}>
                    <i className="fas fa-file-download"> Download CV </i> 
                    
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
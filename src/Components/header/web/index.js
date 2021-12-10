import React from "react";
import "./web.css";

function Web(){
    return(
        <div className="web">
            <div className="web-option">
                <a href="#skills">
                <i class="fas fa-laptop-code"></i>&nbsp;&nbsp;Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Experience
                </a>
            </div>
            <div className="web-option">
                <a href="#project">
                <i class="fas fa-user-edit"></i>&nbsp;&nbsp;Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fas fa-id-badge"></i>&nbsp;&nbsp;Contact
                </a>
            </div>
        </div>
    );
}

export default Web;
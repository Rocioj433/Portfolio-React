import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen}) {
    return(
        <div className="mobile">
            <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
               <i class="fas fa-minus-square"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#skills">
                    <i class="fas fa-laptop-code"></i>&nbsp;&nbsp;Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                    <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Experience
                    </a>
                </div>
                <div className="mobile-option">
                <a href="#project">
                <i class="fas fa-user-edit"></i>&nbsp;&nbsp;Projects
                </a>
            </div>
                <div className="mobile-option">
                    <a href="#work">
                    <i class="fas fa-id-badge"></i>&nbsp;&nbsp;Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;
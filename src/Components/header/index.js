import React, {useState} from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
    };
    window.onscroll = function(){
        setIsOpen(false);
    };
    return(
        <div className="header">
            <div onClick={handleLogoClick} className="logo">
                Rocio Sanchez
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>

                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <i className="fas fa-bars"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    );
}

export default Header;
import React from "react";
import "./skill-card.css";

function SkillCard({ skill }) {
    return (
        <div className="skill-card" key={skill.id}>
            <div className="skill-icon">{skill.icon}</div>
            <br />
            <label className="skill-name">{skill.name}</label>
        </div>
    );
}

export default SkillCard;
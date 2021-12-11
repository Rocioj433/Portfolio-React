import React from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills"
import SkillCard from "./skill-card";
import Separator from "../../common/separator";

function Skills() {
    const data = SkillsData;
    return(
        <div className="skills">
            <Separator />
            <label className="section-data">Skills</label>
            <hr />
            <div className="container skills-container">
                {data.map((item) => {
                    return(
                        <div className="skills-section">
                            <div className="skills-title-container">
                              <label className="skills-section-title">{item.type}</label>
                            </div>
                            <div className="skills-list">
                                <div className="skills-list-container">
                                {item.list.map((skill) => {
                                    return <SkillCard skill={skill} />;
                                })}
                                </div>
                            </div>
                            <br/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
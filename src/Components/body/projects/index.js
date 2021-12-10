import React from "react";
import { ProjectData } from "../../../data/project";
import "./project.css";
import Separator from "../../common/separator";

function Project() {
    const data = ProjectData;
    return(
        <div className="project">
        <div className="project-contact">
            <Separator />
            <div className="project-title-container">
            <label className="section-data">Project</label> 
            </div>
                {data.map((item) => {
                return(
                    <div className="project-container">
                    <a href={item.link} target="_blank">
                        <div className="project-icon-div">
                            <img src={item.icon} className="project-icon" />
                            <button className="btn" type="button">{item.name}</button>
                        </div>
                    </a>
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default Project;
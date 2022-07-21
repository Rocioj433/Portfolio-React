import React from "react";
import { ProjectData } from "../../../data/project";
import "./project.css";

function Project() {
  const data = ProjectData;
  return (
    <div className="project">
      <div className="project-title-container">
        <label className="section-data">Project</label>
        <hr/>
      </div>
      <div className="project-contact">
        {data.map((item) => {
          return (
            <div className="project-container" key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="project-icon-div">
                  <img src={item.icon} className="project-icon" alt="project"/>
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

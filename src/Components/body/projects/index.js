import React from "react";
import { ProjectData } from "../../../data/project";
import "./project.css";
import Separator from "../../common/separator";

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
            <div className="project-container">
              <a href={item.link} target="_blank">
                <div className="project-icon-div">
                  <img src={item.icon} className="project-icon" />
                  {/* <p className="btn"> {item.name} </p> */}
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

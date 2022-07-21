import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";

function Work() {
    const data = WorkData;
    return(
        <div className="work">
            <Separator />
            <label className="section-title">Studies</label>
            <hr/>
            <div className="work-list">
                {data.map((item) => {
                    return <WorkCard item={item} key={item.id}/>;
                })}
            </div>
        </div>
    );
    
}

export default Work;
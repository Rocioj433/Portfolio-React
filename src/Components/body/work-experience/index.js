import React from 'react'
import Separator from '../../common/separator';
import WorkCard from './work-card';
import { WorkExperienceData } from '../../../data/workExperience';
import "./work.css";

const WorkExperience = () => {
    const data = WorkExperienceData;
  return (
<div className="work">
            <Separator />
            <label className="section-title">Work Experience</label>
            <hr/>
            <div className="work-list">
                {data.map((item) => {
                    return <WorkCard item={item} />;
                })}
            </div>
        </div>
  )
}

export default WorkExperience
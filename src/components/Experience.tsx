import React from "react";
import experienceData from "../../data/experienceData";

const Experience = () => (
  <>
    <div className="grid h-20 flex-grow card  rounded-box ">
      <h3>Experience</h3>
      <ul>
        {experienceData.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </>
);
export default Experience;

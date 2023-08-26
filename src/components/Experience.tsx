import React from "react";
import experienceData from "../../data/experienceData";

const Experience = () => (
  <div>
    <h3 className="text-2xl">Experience</h3>
    <ul>
      {experienceData.map((item, index) => (
        <li key={index}>
          <h4 className="text-xl">{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.date}</p>
        </li>
      ))}
    </ul>
  </div>
);
export default Experience;

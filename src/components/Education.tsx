import React from "react";
import educationData from "../../data/educationData.js";

const Education = () => (
  <>
    <div className="grid h-20 flex-grow card  rounded-box ">
      <h3>Education</h3>
      <ul>
        {educationData.map((item, index) => (
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
export default Education;


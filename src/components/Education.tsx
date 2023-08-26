import React from "react";
import educationData from "../../data/educationData.js";

const Education = () => (
  <div>
    <h3 className="text-2xl">Education</h3>
    <ul>
      {educationData.map((item, index) => (
        <li key={index}>
          <h4 className="text-xl">{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.date}</p>
        </li>
      ))}
    </ul>
  </div>
);
export default Education;

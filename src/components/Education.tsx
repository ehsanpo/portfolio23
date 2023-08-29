import React from "react";
import educationData from "../../data/educationData.js";
import Card from "@/components/Card";
const Education = () => (
  <div>
    <h3 className="text-2xl">Education</h3>
    <ul>
      {educationData.map((item, index) => (
        <li key={index} className="my-2">
          <Card
            title={item.title}
            desc={
              <>
                <p>{item.description}</p>
                <div className="badge badge-outline">{item.date}</div>
              </>
            }
          />
        </li>
      ))}
    </ul>
  </div>
);
export default Education;

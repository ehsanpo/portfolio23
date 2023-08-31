import React from "react";
import educationData from "../../data/educationData.js";
import Card from "@/components/Card";
const Education = () => (
  <div>
    <h2 className="text-2xl">Education</h2>
    <ul>
      {educationData.map((item, index) => (
        <li key={index} className="my-2">
          <Card
            title={item.title}
            desc={
              <>
                <p>{item.description}</p>
                <div className="badge badge-outline mt-1">{item.date}</div>
              </>
            }
          />
        </li>
      ))}
    </ul>
  </div>
);
export default Education;

import React from "react";
import experienceData from "../../data/experienceData";
import Card from "@/components/Card";

const Experience = () => (
  <div>
    <h2 className="text-2xl">Experience</h2>
    <ul>
      {experienceData.map((item, index) => (
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
export default Experience;

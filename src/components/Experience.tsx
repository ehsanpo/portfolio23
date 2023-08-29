import React from "react";
import experienceData from "../../data/experienceData";
import Card from "@/components/Card";

const Experience = () => (
  <div>
    <h3 className="text-2xl">Experience</h3>
    <ul>
      {experienceData.map((item, index) => (
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
export default Experience;

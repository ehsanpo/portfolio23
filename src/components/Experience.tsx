import React from "react";
import experienceData from "../../data/experienceData";
import Card from "@/components/Card";
import Heading from "./Heading";

const Experience = () => (
  <div>
    <Heading element="h2" size="l" className="md:w-2/5">
      Experience
    </Heading>
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

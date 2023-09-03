import React from "react";
import educationData from "../../data/educationData.js";
import Card from "@/components/Card";
import Heading from "./Heading";

const Education = () => (
  <div>
    <Heading element="h2" size="l" className="md:w-2/5">
      Education
    </Heading>
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

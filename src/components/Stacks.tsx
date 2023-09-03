import React from "react";
import Grid from "@/components/Grid";
import stacks_data from "../../data/stacks-data";
import Card from "./Card";
import Heading from "./Heading";

interface StackDataItem {
  slug: string;
  labels: string[];
  icon: string;
}

const Stack: React.FC = () => {
  const className: Record<string, string> = {
    "bg-grad0": "hover:bg-grad0  hover:text-primary-content",
    "bg-grad1": "hover:bg-grad1  hover:text-primary-content",
    "bg-grad2": "hover:bg-grad2  hover:text-primary-content",
    "bg-grad3": "hover:bg-grad3  hover:text-primary-content",
    "bg-grad4": "hover:bg-grad4  hover:text-primary-content",
    "bg-grad5": "hover:bg-grad5  hover:text-primary-content",
    "bg-grad6": "hover:bg-grad6  hover:text-primary-content",
    "bg-grad7": "hover:bg-grad7  hover:text-primary-content",
  };

  return (
    <div className="container mx-auto ">
      <Heading size="xl" element="h2" padding="xl" center>
        Stacks
      </Heading>
      <Grid columns={4}>
        {stacks_data.map((item: StackDataItem, index: number) => {
          return (
            <Card
              className={` ${className["bg-grad" + index]}`}
              key={item.slug}
              title={item.slug}
              desc={
                <ul>
                  {item.labels.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              }
              img={{
                src: item.icon,
                alt: item.slug,
                width: 80,
                height: 80,
              }}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Stack;

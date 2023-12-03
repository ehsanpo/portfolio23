import React from "react";
import Grid from "@/components/Grid";
import stacks_data from "../../data/stacks-data";
import Card from "./Card";
import Heading from "./Heading";
import { Fade } from "react-awesome-reveal";
import  {calculateAnimationDelayValue} from "@/util/index";

interface StackDataItem {
  slug: string;
  labels: string[];
  icon: string;
}

const Stack: React.FC = () => {
  const className: Record<string, string> = {
    "bg-grad0": "hover:bg-grad0",
    "bg-grad1": "hover:bg-grad1",
    "bg-grad2": "hover:bg-grad2",
    "bg-grad3": "hover:bg-grad3",
    "bg-grad4": "hover:bg-grad4",
    "bg-grad5": "hover:bg-grad5",
    "bg-grad6": "hover:bg-grad6",
    "bg-grad7": "hover:bg-grad7",
  };

  return (
    <div className="container mx-auto mb-3 ">
      <Heading size="xl" element="h2" padding="xl" center>
        Stacks
      </Heading>
      <Grid columns={4}>
        {stacks_data.map((item: StackDataItem, index: number) => {
          return (
            <Fade delay={calculateAnimationDelayValue(index) } key={index} >
            <Card
              center
              className={`text-primary ${className["bg-grad" + index]}`}
              key={item.slug}
              title={item.slug}
              desc={
                <ul className="card2 ">
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
            </Fade>
          );
        })}
      </Grid>
    </div>
  );
};

export default Stack;

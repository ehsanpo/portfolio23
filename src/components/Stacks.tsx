import React from "react";
import Grid from "@/components/Grid";
import stacks_data from "../../data/stacks-data";
import Card from "./Card";
import Heading from "./Heading";

const Stack = () => {
  return (
    <div className="container mx-auto">
      <Heading size="xl" element="h2" padding="xl" center>
        Stacks
      </Heading>
      <Grid columns={4}>
        {stacks_data.map((item) => {
          console.log("item", item);
          return (
            <Card
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

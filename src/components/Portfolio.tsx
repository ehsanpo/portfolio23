import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Heading from "./Heading";

interface PortfolioProps {
  data: {
    slug: string;
    data: {
      port_date: string;
      permalink: string;
      title: string;
      description: string;
      fileName: string;
      background_image: string[];
      tag: string[];
      new: boolean;
    };
  }[];
}
const currentYear = new Date().getFullYear();

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="mx-auto container lg:justify-center lg:px-8 mb-5">
      <Heading size="xl" element="h2" padding="xl" center>
        Selected Work
      </Heading>
      <div className="mx-auto  lg:max-w-none">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {data.map((item) => (
            <Card
              key={item.slug}
              title={item.data.title}
              desc={item.data.description}
              img={{
                src:
                  "/images/portfolio/" +
                  item.data.fileName +
                  "/" +
                  item.data.background_image[0],
                alt: item.data.title,
              }}
              aspectRatio
              tags={item.data.tag}
              new={item.data.port_date[0] === currentYear.toString()}
              link={item.data.permalink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

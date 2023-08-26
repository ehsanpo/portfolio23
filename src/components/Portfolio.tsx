import React from "react";
import Image from "next/image";
import Card from "@/components/Card";

interface PortfolioProps {
  data: {
    slug: string;
    data: {
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

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className="mx-auto mx-auto container lg:justify-center  lg:px-8 mt-16">
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
              tags={item.data.tag}
              new={item.data.new}
              link={item.data.permalink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

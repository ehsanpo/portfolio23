import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

export default function Portfolio({ data }) {
  console.log(data)
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {data.map((item) => (
            <Card
              key={item.slug}
              title={item.data.title}
              desc={item.data.description}
              img={{ src: "/images/portfolio/" + item.data.fileName + "/" + item.data.background_image[0], alt: item.data.title }}
              tags={item.data.tag}
              new={item.data.new}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

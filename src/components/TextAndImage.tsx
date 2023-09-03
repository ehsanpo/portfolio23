import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Heading from "./Heading";

interface ExperienceProps {
  headline?: string;
  subHeadline?: string;
  description?: string;
  img?: {
    src: string;
    alt: string;
  };
  imgComponent?: ReactNode;
  imgOnLeft?: boolean;
  className?: string;
}

const Experience: FC<ExperienceProps> = ({
  headline,
  subHeadline,
  description,
  img,
  imgComponent,
  imgOnLeft = false,
  className = "",
}) => {
  return (
    <section className={`body-font ${className}`}>
      <div className="container mx-auto flex py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow mt-2 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {headline && (
            <>
              <Heading element="h1" size="xl">
                {headline}
              </Heading>
            </>
          )}
          {subHeadline && (
            <Heading element="h2" size="l">
              {subHeadline}
            </Heading>
          )}

          {description && (
            <p className="text-xl my-4 px-2 md:px-0 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div
          className={` ${
            imgOnLeft ? "-order-1 md:mr-6" : "md:ml-6"
          } lg:max-w-lg lg:w-full md:w-1/2 w-5/6`}
        >
          {img && (
            <Image src={img.src} alt={img.alt} width={600} height={600} />
          )}
          {imgComponent && imgComponent}
        </div>
      </div>
    </section>
  );
};

export default Experience;

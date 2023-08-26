import React, { FC, ReactNode } from "react";
import Image from "next/image";

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
}

const Experience: FC<ExperienceProps> = ({
  headline,
  subHeadline,
  description,
  img,
  imgComponent,
  imgOnLeft = false,
}) => {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex py-7 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {headline && (
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
              {headline}
            </h1>
          )}
          {subHeadline && (
            <h2 className="text-xl font-semibold  mt-4">{subHeadline}</h2>
          )}

          {description && (
            <p className="mb-4 mt-4 leading-relaxed">{description}</p>
          )}
        </div>

        <div
          className={` ${
            imgOnLeft && "-order-1 "
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

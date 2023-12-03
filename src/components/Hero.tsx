import React from "react";
import Header from "./Header";
import Heading from "./Heading";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section
      className={`hero min-h-screen min-h-[300] bg-grad7 `}
    >
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <Heading
            size="xl"
            element="h1"
            padding="none"
            center
            className="text-primary"
          >
            Ehsan Pourahdi
          </Heading>
          <Heading
            className="my-2 text-secondary"
            size="lg"
            element="h2"
            padding="none"
            center
          >
            {title}
          </Heading>
          <p className="py-2 text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="hero min-h-screen min-h-[300]  bg-base-200 ">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Ehsan Pourahdi</h1>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="py-2 text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

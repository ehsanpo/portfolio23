import React from "react";

interface HeroProps {
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="py-2 text-xl">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
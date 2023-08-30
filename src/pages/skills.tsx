import React, { useState, useEffect } from "react";
import Section from "@/components/Section";
import "chart.js/auto";

import chart_data_overall from "@/../data/skills-data";
import stacks_data from "@/../data/stacks-data";
import Badges from "@/components/Badges";
import Button from "@/components/Button";
import Stack from "@/components/Stacks";
import Image from "next/image";
import InViewMonitor from "react-inview-monitor";
import Chart from "@/components/Chart";
import Stats from "@/components/Stats";
import Certs from "@/components/Certs";
import TextAndImage from "@/components/TextAndImage";

const Skills = () => {
  const chart_data = [...chart_data_overall, ...stacks_data];

  return (
    <>
      <Section className="page-header lg:px-8 mt-24 sm:mt-32 lg:mt-4 ">
        <h1 className="text-1xl font-bold ">Skills</h1>
        <h2 className="mt-3 text-4xl font-bold ">The latest work</h2>

        <div className="mt-3 max-w-3xl text-xl">
          <p>
            Proficient in front-end, back-end, and system administration.
            Crafting digital solutions with a user-centric approach.
          </p>
        </div>
      </Section>
      <Section secondary maxWidth="m" paddingTop="l">
        <Chart />
      </Section>
      <Section>
        <Stats />
        <img
          src="https://ghchart.rshah.org/000000/ehsanpo"
          alt="ehsanpo Github Chart"
          width={1400}
        />
      </Section>

      <Section>
        <Stack />
      </Section>

      <Section className="bg-grad1">
        <Certs />
      </Section>

      <TextAndImage
        img={{ src: "/img/0_6.png", alt: "Online Self-Educated" }}
        headline="Online Self-Educated"
        subHeadline="Dedicated to continuous self-improvement through online resources. Leveraging platforms like YouTube, Udemy, Lynda, and Treehouse for comprehensive learning."
      />
      <TextAndImage
        img={{ src: "/img/0_5.png", alt: "Agile Development Processes" }}
        className="bg-secondary text-secondary-content"
        imgOnLeft
        headline="Agile Development Processes"
        subHeadline="I uphold the value of agility, emphasizing swift progress and adeptly responding to change while maintaining a sustainable pace."
      />
      <TextAndImage
        img={{ src: "/img/0_4.png", alt: "Continuous Development" }}
        className="bg-accent text-accent-content"
        headline="Continuous Development"
        subHeadline="I possess the skill to seamlessly integrate diverse changes, encompassing features, configurations, bug fixes, and experiments, into production or user access, ensuring both safety and efficiency within a sustainable framework."
      />

      <Section className="bg-primary text-primary-content">
        <img
          width="1400"
          height="700"
          src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=ehsanpo&skills=JavaScript,HTML,CSS,JSON,Less,NodeJS,PHP,Python,ReactJS,Ruby,SCSS,SQL,Shell,TypeScript&bg=transparent"
        />
      </Section>
    </>
  );
};
export default Skills;

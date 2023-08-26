import React, { useState, useEffect } from "react";
import Section from "@/components/Section";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import chart_data_overall from "@/../data/skills-data";
import stacks_data from "@/../data/stacks-data";

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
      <Section maxWidth="m" paddingTop="l">
        <Chart />
        <Stats />
      </Section>
      <Section>
        <img
          src="https://ghchart.rshah.org/409ba5/ehsanpo"
          alt="2016rshah's Blue Github Chart"
          width={1400}
        />
      </Section>

      <Section>
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Developer Stacks</h2>
        </InViewMonitor>
        <div className="wrapper">
          <Stack />
        </div>
      </Section>

      <Section>
        <InViewMonitor
          intoViewMargin="6%"
          classNameNotInView="vis-hidden"
          classNameInView="animated titleIn"
          toggleClassNameOnInView
        >
          <h2 className="title red">Certifications</h2>
        </InViewMonitor>
        <Certs />
      </Section>

      <TextAndImage
        headline="Online Self-Educated"
        subHeadline="I usually watch a lot of youtube tutorials, I alltså use other sites like, Udemy, Lynda & Treehouse."
      />
      <TextAndImage
        imgOnLeft
        headline="Agile Development Processes"
        subHeadline="I believe that agility is about moving quickly and adapting to change at a sustainable pace."
      />
      <TextAndImage
        headline="Continuous Development"
        subHeadline="Ability to get changes of all types—including new features, configuration changes, bug fixes and experiments—into production, or into the hands of users, safely and quickly in a sustainable way."
      />

      <Section>
        <div className="wrapper">
          <img
            width="1400"
            height="700"
            src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=ehsanpo&skills=JavaScript,HTML,CSS,JSON,Less,NodeJS,PHP,Python,ReactJS,Ruby,SCSS,SQL,Shell,TypeScript&bg=transparent"
          />
        </div>
      </Section>
    </>
  );
};
export default Skills;

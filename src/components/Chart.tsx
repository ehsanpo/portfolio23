import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import chart_data_overall from "@/../data/skills-data";
import stacks_data from "@/../data/stacks-data";
import Button from "@/components/Button";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillData {
  slug: string;
  labels: string[];
  data: number[];
}

interface ColorPattern {
  [key: string]: string;
}

const color_pattern: ColorPattern = {
  Overall: "rgba(105, 248, 255, 0.8)",
  "Front-end": "rgba(245, 151, 64, 0.8)",
  Backend: "rgba(139, 204, 59, 0.8)",
  Database: "rgba(252, 238, 9, 0.8)",
  Design: "rgba(255, 255, 255, 0.8)",
  Cloud: "rgba(0, 64, 176, 0.8)",
  DevOps: "rgba(0, 0, 0, 0.8)",
};
const bgcolor = "rgba(254, 48, 72, 0.8)";

const chart_data_maker = (chart_data: SkillData[]) => {
  const return_object: { [key: string]: any } = {};

  for (let i = 0; i < chart_data.length; i++) {
    const skill = chart_data[i];
    const slug = skill.slug;
    return_object[slug] = {
      labels: skill.labels,
      datasets: [
        {
          label: skill.slug,
          data: skill.data,
          pointBackgroundColor: "#fef900",
          pointHoverRadius: 5,
          borderWidth: 1,
          fill: true,
          scaleStartValue: 0,
          borderColor: bgcolor,
        },
      ],
    };
  }
  return return_object;
};

const Skills: React.FC = () => {
  const chart_data: SkillData[] = [...chart_data_overall, ...stacks_data].map(
    (data) => ({
      ...data,
      // Convert data to numbers
      data: data.data.map(Number),
    })
  );

  const return_object = chart_data_maker(chart_data);
  const [skdata, setSkdata] = useState(return_object["Overall"]);
  const [current_button, setCurrentButton] = useState<string>("Overall");

  const options = (current_label: string = "Overall") => {
    return {
      responsive: true,
      fontSize: 40,
      backgroundColor: color_pattern[current_label],
      opacity: 0.5,
      pointBorderColor: "#fff",
      scale: {
        ticks: {
          showLabelBackdrop: true,
          fontColor: "#ffffff",
          min: 0,
          max: 10,
          stepSize: 2,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          grid: {
            color: "#fff",
          },
          pointLabels: {
            color: "#fff",
            font: {
              size: 16,
              family: "Tomorrow, sans-serif",
            },
          },
        },
      },
      pointLabelFontColor: "rgba(255,255,255,1)",

      legend: {
        labels: {
          color: "#fff",
        },
      },

      plugins: {
        legend: {
          labels: {
            color: "#fef900",
            font: {
              size: 18,
              family: "Tomorrow, sans-serif",
            },
          },
        },
      },
    };
  };
  const [radarOptions, setRadarOptions] = useState(options());

  const handleClick = (
    chart_op: string,
    index: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const current_label = return_object[chart_op].datasets[0].label;
    setRadarOptions(options(current_label));
    setCurrentButton(index);
    setSkdata(return_object[chart_op]);
  };

  return (
    <>
      <div className="bg-color-3">
        <div className="wrapper">
          <div className="radar-right text-center">
            {chart_data.map((skill, index) => (
              <Button
                className={`m-1 ${skill.slug} ${
                  current_button === index.toString() ? "active" : ""
                }`}
                onClick={(e) => {
                  handleClick(skill.slug, index.toString(), e);
                }}
                key={skill.slug}
              >
                {skill.slug}
              </Button>
            ))}
          </div>
        </div>
        <div className="wrapper-m">
          <div className="radarholder">
            <Radar data={skdata} options={radarOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

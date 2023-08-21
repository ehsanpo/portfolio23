import React from "react";

import SeO from "@/components/Seo";
import Portfolio from "@/components/Portfolio";
import fs from "fs";
import matter from "gray-matter";

const PortfolioPage = ({ portfolioBlockData }) => {
  return (
    <>
      <SeO title="Developer Portfolio" />
      <div className="page-header">
        <div className="wrapper">
          <h1 className="display">Portfolio</h1>
        </div>
      </div>
      <section className="bg-color-1">
        <div className="wrapper">
          <div className="wrapper-m">
            <div>
              Welcome to my online portfolio! As a developer, I am committed to
              creating high-quality projects that focus on the complete
              satisfaction of the end user. My skillset includes front-end,
              back-end, and site maintenance, as well as experience as a system
              administrator. <br />
              On this page, you will find a selection of my best work. I have
              included a variety of projects that showcase my skills and
              abilities, and I hope you will enjoy exploring them. If you have
              any questions or would like to discuss a potential project, please
              don't hesitate to contact me. Thank you for visiting!
            </div>
          </div>
        </div>
      </section>
      <Portfolio data={portfolioBlockData} />
    </>
  );
};
export default PortfolioPage;

export async function getStaticProps() {
  const files = fs.readdirSync("Content/Portfolio");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `Content/Portfolio/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });

  const sortedpost = posts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );
  return { props: { portfolioBlockData: sortedpost } };
}

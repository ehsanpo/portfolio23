import React from "react";

import SeO from "@/components/Seo";
import Portfolio from "@/components/Portfolio";
import fs from "fs";
import matter from "gray-matter";
import Section from "@/components/Section";

interface PortfolioPageProps {
  portfolioBlockData: PortfolioItem[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  portfolioBlockData,
}) => {
  return (
    <>
      <SeO
        title="Developer Portfolio"
        description="Portfolio showcasing top-notch projects reflecting my expertise as a developer."
      />

      <Section className="page-header lg:px-8 mt-24 sm:mt-32 lg:mt-4 ">
        <h1 className="text-1xl font-bold ">Portfolio</h1>
        <h2 className="mt-3 text-4xl font-bold ">The latest work</h2>

        <div className="mt-3 max-w-3xl text-xl">
          <p>
            Explore my portfolio showcasing top-notch projects reflecting my
            expertise as a developer. From front-end to back-end, I craft
            solutions that prioritize user satisfaction. Contact me for
            inquiries.
          </p>
        </div>
      </Section>
      <Portfolio data={portfolioBlockData} />
    </>
  );
};
export default PortfolioPage;

export async function getStaticProps() {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `content/Portfolio/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    frontmatter.fileName = fileName;
    frontmatter.date = new Date(frontmatter.date).toISOString();
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });

  const sortedpost = posts.sort((a, b) => {
    const yearA = parseInt(a.data.port_date);
    const yearB = parseInt(b.data.port_date);
    return yearB - yearA;
  });

  return { props: { portfolioBlockData: sortedpost } };
}

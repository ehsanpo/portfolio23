import React from "react";
//import { Link } from "gatsby"

import SeO from "@/components/Seo";
import PostBlock from "@/components/PostBlock";
import fs from "fs";
import matter from "gray-matter";
import Section from "@/components/Section";

const Portfolio = ({ data, content }) => (
  <>
    <SeO title="Developer Portfolio" />

    <Section className="page-header lg:px-8 mt-24 sm:mt-32 lg:mt-4 ">
      <h1 className="text-1xl font-bold ">Blog</h1>
      <h2 className="mt-3 text-4xl font-bold ">The latest articles and news</h2>

      <div className="mt-3 max-w-3xl text-xl">
        <p>
          My tech-focused blog shares my web development journey, insights on
          modern/future tech, and tools for an enhanced internet experience.
          Join the knowledge journey!
        </p>
      </div>
    </Section>

    <section className="bg-color-1">
      <div className="wrapper"></div>
    </section>
    <PostBlock data={data} excerpt />
  </>
);
export default Portfolio;

export async function getStaticProps() {
  const files = fs.readdirSync("Content/blog");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `Content/blog/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter, content } = matter(readFile);
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
      content,
    };
  });
  const sortedpost = posts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );
  return { props: { data: sortedpost } };
}

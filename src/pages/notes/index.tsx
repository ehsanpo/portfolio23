import React from "react";
//import { Link } from "gatsby"

import SeO from "@/components/Seo";
import PostBlock from "@/components/PostBlock";
import fs from "fs";
import matter from "gray-matter";
import Section from "@/components/Section";

const Portfolio = ({ data }: BlogProps) => (
  <>
    <SeO title="Developer Blog" description="Web development journey" />

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
  const files = fs.readdirSync("content/Blog");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `content/Blog/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter, content } = matter(readFile);
    frontmatter.fileName = fileName;

    frontmatter.date = new Date(frontmatter.date).toISOString();

    return {
      slug: "/notes/" + frontmatter.permalink,
      data: frontmatter,
      content,
    };
  });
  const sortedpost = posts.sort(
    (a, b) =>
      (new Date(b.data.date).getTime() as number) -
      (new Date(a.data.date).getTime() as number)
  );
  return { props: { data: sortedpost } };
}

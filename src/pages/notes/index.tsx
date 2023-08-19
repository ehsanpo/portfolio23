import React from "react";
//import { Link } from "gatsby"

import SeO from "@/components/Seo";
import PostBlock from "@/components/PostBlock";
import fs from "fs";
import matter from "gray-matter";

const Portfolio = ({ data }) => (
  <>
    <SeO title="Developer Portfolio" />
 
    <div className="page-header">
      <div className="wrapper">
        <h1 className="display">Blog</h1>
      </div>
    </div>

    <section className="bg-color-1">
      <div className="wrapper">
        <div className="wrapper-m">
          <p>
            I write this blog personally focused mostly on tech-related
            articles, but I sometimes write about my day to day experience as a
            web developer. I feel that this is an excellent way to channel my
            ideas and thoughts through this blog.
          </p>
          <p>
            I write what I feel is essential on current modern technology, or
            what the future technology beholds. And maybe some special
            tools/things that can be used to create a better internet experience
          </p>
          <p>
            It is incredible to know what we don’t know. I think that those with
            the thirst for knowledge can change this world. I have that thirst,
            and I quench it by not only learning about new technology and other
            things, I also share it with you, through this blog.
          </p>
        </div>
      </div>
    </section>
    <PostBlock data={data} />
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
  return { props: { data: sortedpost } };
}

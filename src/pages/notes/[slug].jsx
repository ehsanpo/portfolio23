import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Template from "../../components/templates/blog.js";

export async function getStaticPaths() {
  const files = fs.readdirSync("content/Blog");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("slug: ", slug);
  const fileName = fs.readFileSync(`content/blog/${slug}/${slug}.md`, "utf-8");
  const files = fs.readdirSync("content/blog");
  // find the index of the current slug in files
  const index = files.findIndex((file) => file.replace(".md", "") === slug);

  // get the next and previous slugs
  const next = files[index + 1] || files[0];
  const nextPostFile = fs.readFileSync(
    `Content/blog/${next}/${next}.md`,
    "utf-8"
  );
  const prev = files[index - 1] || files[files.length - 1];
  const prevPostFile = fs.readFileSync(
    `Content/blog/${prev}/${prev}.md`,
    "utf-8"
  );
  const currentPost = fs.readFileSync(
    `Content/blog/${slug}/${slug}.md`,
    "utf-8"
  );

  const { data: post, content } = matter(currentPost);
  const { data: prevPost } = matter(prevPostFile);
  const { data: nextPost } = matter(nextPostFile);

  return {
    props: {
      data: { post, prevPost, nextPost },
      content,
    },
  };
}

export default function Blog({ data, content }) {
  return <Template data={data} content={content} />;
}

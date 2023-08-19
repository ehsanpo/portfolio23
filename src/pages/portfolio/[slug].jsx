import fs from "fs";
import matter from "gray-matter";
import Template from "../../components/template/portfolio.js";

export async function getStaticPaths() {
  const files = fs.readdirSync("Content/Portfolio");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(
    `Content/portfolio/${slug}/${slug}.md`,
    "utf-8"
  );

  const ehsan = matter(fileName);
  const { data: data, content } = matter(fileName);

  return {
    props: {
      data,
      content,
    },
  };
}

export default function Portfolio({ data, content }) {
  return <Template data={data} content={content} />;
}

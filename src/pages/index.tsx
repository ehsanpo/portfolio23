import Image from "next/image";
import { Inter } from "next/font/google";
import fs from "fs";
import matter from "gray-matter";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";


export default function Home({ portfolioData }: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Digital Developer,Ui & UX Designer and Music Producer"
          description="who provides digital solutions with more than ten years of experience creating and developing software for the web."
        />
        <section>
          <Portfolio data={portfolioData} />
        </section>
        <section>
          <Stacks  />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const files = fs.readdirSync("Content/Portfolio");
  const posts: PortfolioItem[] = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `Content/Portfolio/${fileName}/${fileName}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile) as any as { data: FrontMatter };
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });
  let sources = posts.filter((post) => post.data.onHome === true);
  return { props: { portfolioData: sources } };
}
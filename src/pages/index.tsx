import Image from "next/image";
import { Inter } from "next/font/google";
import fs from "fs";
import matter from "gray-matter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";
import Testimonial from "@/components/Testimonial";
import Awards from "@/components/Awards";
import Clients from "@/components/Clients";

export default function Home({ portfolioData, clients }: HomeProps) {
  console.log(clients);
  return (
    <main>
      <Hero
        title="Digital Developer,Ui & UX Designer and Music Producer"
        description="who provides digital solutions with more than ten years of experience creating and developing software for the web."
      />

      <Portfolio data={portfolioData} />
      <Stacks />
      <Awards />
      <Testimonial />
      <Clients clients={clients} />
    </main>
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
    const { data: frontmatter } = matter(readFile) as any as {
      data: FrontMatter;
    };
    frontmatter.fileName = fileName;
    return {
      slug: frontmatter.permalink,
      data: frontmatter,
    };
  });
  let clients = posts
    .map((post) => post.data.client[0])
    .filter((client, index, self) => self.indexOf(client) === index);

  let sources = posts.filter((post) => post.data.onHome === true);
  return { props: { portfolioData: sources, clients } };
}

import fs from "fs";
import matter from "gray-matter";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";
import Testimonial from "@/components/Testimonial";
import Awards from "@/components/Awards";
import Clients from "@/components/Clients";
import Section from "@/components/Section";
import SeO from "@/components/Seo";

export default function Home({ portfolioData, clients }: HomeProps) {
  return (
    <main>
      <SeO
        title="Ehsan Pourhadi - Digital Developer Portfolio"
        description="Explore a diverse 10+ year journey spanning Software Development, UI/UX Design, Music Production, AI Operations, Tech Research, and more."
      />
      <Hero
        title="Navigating Bits and Beats"
        description="A Multi-Dimensional Portfolio Journey in Software Development, UI/UX Design, Music Production, AI Operation, Tech Research, and More with more than ten years of experience creating and developing software for the web."
      />

      <Section>
        <Portfolio data={portfolioData} />
      </Section>
      <Section primary>
        <Stacks />
      </Section>
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

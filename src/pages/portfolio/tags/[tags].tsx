import Portfolio from "@/components/Portfolio";
import { getAllPostsWithFrontMatter, getTags } from "@/util/index";

export default function BlogTag({
  posts,
  title,
  description,
  tag,
}: BlogTagProps): JSX.Element {
  return (
    <section>
      <div className="wrapper text-center">
        <h3>
          {posts.length} posts tagged &quot;{tag}&quot;
        </h3>
      </div>
      <div className="wrapper">
        {/*  @ts-ignore */}
        <Portfolio data={posts} />
      </div>
    </section>
  );
}

export async function getStaticProps({ params }: { params: { tags: string } }) {
  const posts = await getAllPostsWithFrontMatter("blog", params.tags);

  return {
    props: {
      posts,
      tag: params.tags,
    },
  };
}

export async function getStaticPaths() {
  const tags = await getTags("blog");

  const paths = tags.map((tag) => ({
    params: {
      tags: tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

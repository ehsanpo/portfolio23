import fs from "fs";
import matter from "gray-matter";

async function collateTags(dataType: string): Promise<string[]> {
  const files = fs.readdirSync("content/Portfolio");
  const allTags = new Set<string>();

  files.map((postSlug) => {
    const source = fs.readFileSync(
      `content/Portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );
    const { data } = matter(source) as { data: { tag: string[] } };
    data.fileName = postSlug;
    data.tag.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export async function getTags(dataType: string): Promise<string[]> {
  const tags = {
    blog: await collateTags(dataType),
  };
  return tags[dataType];
}

export async function getAllPostsWithFrontMatter(
  dataType: string,
  filterByTag: string | null = null
): Promise<TaggedPost[]> {
  const files = fs.readdirSync("content/Portfolio");

  return files.reduce<TaggedPost[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(
      `content/Portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );

    const { data } = matter(source) as { data: PostData & { tag: string[] } };
    data.fileName = postSlug;

    if (filterByTag) {
      if (data.tag.includes(filterByTag)) {
        return [
          {
            data: data,
            slug: postSlug.replace(".md", ""),
          },
          ...allPosts,
        ];
      } else {
        return allPosts;
      }
    }

    return [
      {
        data: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}

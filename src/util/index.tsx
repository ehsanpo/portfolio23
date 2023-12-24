import fs from "fs";
import matter from "gray-matter";

async function collateTags(dataType: string): Promise<string[]> {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));
  const allTags = new Set<string>();

  files.map((postSlug) => {
    const source = fs.readFileSync(
      `content/Portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );
    const { data } = matter(source) as unknown as { data: PostData };
    data.fileName = postSlug;
    data.tag.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export async function getTags(dataType: string): Promise<string[]> {
  const tags: Record<string, string[]> = {
    blog: await collateTags(dataType),
  };

  return tags[dataType];
}

export const calculateAnimationDelayValue = (index: number): number => {
  const minValue = 50;
  const maxValue = 150;
  const calculatedValue = 200 * (index / 3);
  return Math.max(minValue, Math.min(calculatedValue, maxValue));
};

export async function getAllPostsWithFrontMatter(
  dataType: string,
  filterByTag: string | null = null
): Promise<TaggedPost[]> {
  const files = fs
    .readdirSync("content/Portfolio")
    .filter((f) => !f.includes(".DS_Store"));

  return files.reduce<TaggedPost[]>((allPosts, postSlug) => {
    const source = fs.readFileSync(
      `content/Portfolio/${postSlug}/${postSlug}.md`,
      "utf8"
    );
    const matterResult = matter(source);
    const { data } = matterResult as unknown as { data: PostData };

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

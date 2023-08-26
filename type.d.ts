declare module "*.md" {
    const value: string;
    export default value;
}

interface FrontMatter {
    permalink: string;
    onHome: boolean;
    fileName: string;
    client: string[];
    tag: string[];
    // Add other properties here
}

interface PortfolioItem {
    slug: string;
    data: FrontMatter;
}

interface HomeProps {
    portfolioData: PortfolioItem[];
    clients: string[];
}


interface PostData {
    title: string;
    fileName: string;
    // Add other properties here
}

interface TaggedPost {
    data: PostData;
    slug: string;
}

interface BlogTagProps {
    posts: TaggedPost[];
    title: string;
    description: string;
    tag: string;
}

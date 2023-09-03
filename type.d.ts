declare module "*.md" {
    const value: string;
    export default value;
}

interface FrontMatter {
    id: number;
    title: string;
    permalink: string;
    onHome: boolean;
    fileName: string;
    client: string[];
    tag: string[];
    port_date: string;
    author: string;
    agancy: string;
    category: string[];
    case_link_url?: string;
    background_image: string[];
    logo: string[];
    bilder: string[];
    onHome: boolean;
    tagline: string;
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
    id: number;
    permalink: string;
    onHome: boolean;
    client: string[];
    tag: string[];
    author: string;
    category: string[];
    onHome: boolean;
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

interface Item {
    data: {
        permalink: string;
        id: string;
        title: string;
        date: string;
        author: string;
    };
    content: string;
}

interface BlogProps {
    data: Item[];
    onHome?: boolean;
    excerpt?: boolean;
}
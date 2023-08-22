declare module "*.md" {
    const value: string;
    export default value;
}

interface FrontMatter {
    permalink: string;
    onHome: boolean;
    fileName: string;
    client: string[];
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
import RSSParser from "rss-parser";
import SubstackPosts from "./SubstackPosts";

interface Post {
  title: string;
  link: string;
}

interface SubstackPageProps {
  url: string; // A URL do feed Substack passada como parâmetro
}

async function fetchSubstackPosts(url: string): Promise<Post[]> {
  const parser: RSSParser = new RSSParser();
  try {
    const feed = await parser.parseURL(url);
    return feed.items.slice(0, 5).map((item) => ({
      title: item.title || "Sem título",
      link: item.link || "#",
    }));
  } catch (error) {
    console.error("Erro ao buscar os posts do Substack:", error);
    return [];
  }
}

export default async function SubstackPage({ url }: SubstackPageProps) {
  
  const posts = await fetchSubstackPosts(url);

  return <SubstackPosts posts={posts} />;
}

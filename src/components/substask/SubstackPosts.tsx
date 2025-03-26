"use client"; // Marca o componente como Client Component

interface Post {
  title: string;
  link: string;
}

interface SubstackPostsProps {
  posts: Post[];
}

export default function SubstackPosts({ posts }: SubstackPostsProps) {
  return (
    <div>
      <h1>Últimos Posts do Substack</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

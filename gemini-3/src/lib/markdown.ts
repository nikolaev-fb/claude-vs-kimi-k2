import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  shortDescription: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'pages');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: data.url,
      title: data.title,
      shortDescription: data['short-description'],
      content,
    };
  });

  return allPostsData;
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

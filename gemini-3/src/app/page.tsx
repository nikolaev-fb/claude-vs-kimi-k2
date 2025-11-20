import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/post/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.shortDescription}</p>
            <Link href={`/post/${post.slug}`} className="text-sm font-medium text-blue-500 hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

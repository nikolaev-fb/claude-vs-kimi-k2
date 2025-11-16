import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Explore articles about web development, JavaScript, React, and more.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href={`/posts/${post.metadata.url}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.metadata.title}
              </a>
            </h2>
            <p className="text-gray-600">
              {post.metadata['short-description']}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

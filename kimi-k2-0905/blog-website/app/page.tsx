import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600">
            Exploring web development, React, JavaScript, and modern programming practices.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Latest Posts
          </h2>
          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    href={post.url}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post["short-description"]}</p>
                <Link
                  href={post.url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

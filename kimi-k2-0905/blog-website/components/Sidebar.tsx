"use client";

import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { useEffect, useState } from "react";
import { Post } from "@/lib/posts";

export default function Sidebar() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }
    loadPosts();
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="block mb-8">
          <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            My Blog
          </h1>
        </Link>

        <nav>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
            Posts
          </h2>
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={post.url}
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 text-sm">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    {post["short-description"]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
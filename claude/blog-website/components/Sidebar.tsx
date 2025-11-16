import Link from 'next/link'
import { Post } from '@/lib/posts'

interface SidebarProps {
  posts: Post[]
}

export default function Sidebar({ posts }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:text-blue-400 transition-colors">
            My Blog
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.metadata.url}`}
                className="block px-4 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                <div className="font-semibold">{post.metadata.title}</div>
                <div className="text-sm text-gray-400 mt-1">
                  {post.metadata['short-description']}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

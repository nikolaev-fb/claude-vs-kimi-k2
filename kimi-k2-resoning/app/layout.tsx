import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { getAllPostsMetadata } from '@/lib/posts'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'A personal blog built with Next.js and Markdown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = getAllPostsMetadata()

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-900 text-white h-screen sticky top-0 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">
                <Link href="/">My Blog</Link>
              </h1>
              <p className="text-gray-400 text-sm mb-8">Personal thoughts and tutorials</p>

              <nav>
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Posts
                </h2>
                <ul className="space-y-2">
                  {posts.map((post) => {
                    return (
                      <li key={post.slug}>
                        <Link
                          href={`/posts/${post.slug}`}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          {post.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          </aside>
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

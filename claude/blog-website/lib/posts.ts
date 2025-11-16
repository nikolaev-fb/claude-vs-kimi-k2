import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMetadata {
  title: string
  url: string
  'short-description': string
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
  contentHtml?: string
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as PostMetadata,
        content,
      }
    })

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as PostMetadata,
      content,
    }
  } catch (error) {
    return null
  }
}

export async function getPostWithHtml(slug: string): Promise<Post | null> {
  const post = getPostBySlug(slug)
  if (!post) return null

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(post.content)

  const contentHtml = processedContent.toString()

  return {
    ...post,
    contentHtml,
  }
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkHighlight from 'remark-highlight.js'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  url: string
  'short-description': string
  content: string
  date: string
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
      content: '',
      date: fs.statSync(fullPath).mtime.toISOString()
    } as Post
  })

  return allPostsData.sort((a, b) => a.title.localeCompare(b.title))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .use(remarkHighlight)
      .process(content)

    const contentHtml = processedContent.toString()

    return {
      slug,
      ...data,
      content: contentHtml,
      date: fs.statSync(fullPath).mtime.toISOString()
    } as Post
  } catch (error) {
    return null
  }
}